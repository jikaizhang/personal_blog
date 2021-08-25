from django.shortcuts import render, get_object_or_404
from django.contrib.auth.mixins import (
    # cannot use login_required decorator for class-based view, using mixin instead
    LoginRequiredMixin,
    UserPassesTestMixin
)
from django.contrib.auth.models import User
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)
from .models import Post


def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'blog/home.html', context)

class PostListView(ListView):
    model = Post
    # convention: <app>/<model>_<viewtype>.html
    template_name = 'blog/home.html'
    context_object_name = 'posts' # to match home template
    # want latest posts to appear at the top
    ordering = ['-date_posted'] # minus sign means reverse ordering
    paginate_by = 5

class UserPostListView(ListView):
    model = Post
    # convention: <app>/<model>_<viewtype>.html
    template_name = 'blog/user_posts.html'
    context_object_name = 'posts' # to match home template
    paginate_by = 5

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Post.objects.filter(author=user).order_by('-date_posted')

class PostDetailView(DetailView):
    model = Post

class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']
    # override form_valid to set author name
    def form_valid(self, form):
        form.instance.author = self.request.user
        # run the form_valid method in parent class after assigning author
        return super().form_valid(form)

class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title', 'content']
    # override form_valid to set author name
    def form_valid(self, form):
        form.instance.author = self.request.user
        # run the form_valid method in parent class after assigning author
        return super().form_valid(form)
    # make sure only the author of the post can edit it
    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = '/'
    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

def contact(request):
    return render(request, 'blog/contact.html', {'title': 'Contact Me'})
