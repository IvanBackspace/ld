import re
import requests

def get_thumbnail_url(video_url):
    video_id = re.findall(r"v=([^\&]*)", video_url)[0]
    thumbnail_url = f"https://img.youtube.com/vi/{video_id}/hqdefault.jpg"
    return thumbnail_url