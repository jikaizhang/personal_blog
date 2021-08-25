from django.db import models
from django.contrib.auth.models import User
from PIL import Image

class Profile(models.Model):
    # profile and user should have 1-to-1 relationship
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'

    # TODO: the following resize technique cause error in S3

    # allows access to any positional/key word arguments to the method
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        # resize the image so that it won't take up too much space
        img = Image.open(self.image.path)
        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
