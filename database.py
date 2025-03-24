import requests

# for artisan in data["artisans"]:
#     print(artisan["_id"])
#     print(artisan["workingDays"])

# register_artisan = requests.get(url=f"{ARTISAN_BASE_URL}/POST/artisan/", params=HEADER)

class Database:
    def __init__(self):
        self.ARTISAN_BASE_URL = "https://handyman-backend-x6w2.onrender.com/api/artisan"
        self.HEADERS = { "Content-Type": "application/json" }
        self.all_artisans = requests.get(url=f"{self.ARTISAN_BASE_URL}", params=self.HEADERS).json()["artisans"]