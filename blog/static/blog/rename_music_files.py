from mutagen.easyid3 import EasyID3
import os
import json

def write_to_json(path, filename, data):
	full_path = path + '/' + filename
	with open (full_path, 'w', encoding='utf8') as fp:
		json.dump(data, fp, indent=4, ensure_ascii=False)

path = r'C:/Users/zhuji/Desktop/personal_website/blog/static/blog/music/audio'
os.chdir(path)

file_list = filter((lambda x: '.mp3' in x), os.listdir(path))
data = []

# rename mp3 file names provided by QQ Music
for i in file_list:
        print("file: " + i)
        try:
                current = EasyID3(i)
                songname = current["title"][0]
                thumbnail = songname + ".jpg"
                audio = songname + ".mp3"
                artistname = current["artist"][0]
                song_data = {}
                song_data['thumbnail'] = thumbnail
                song_data['audio'] = audio
                song_data['songname'] = songname
                song_data['artistname'] = artistname
                data.append(song_data)
                
                # songname.replace(" ", "_")
                del current
                print("renaming " + i + " to " + songname)
                print("artist: " + artistname)
                os.rename(i, audio)
        except:
                print("...that file didn't work for some reason.")

json_path = r'C:/Users/zhuji/Desktop/personal_website/blog/static/blog'
json_name = "songData.json"
write_to_json(json_path, json_name, data)