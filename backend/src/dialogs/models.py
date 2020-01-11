from django.db import models


class User(models.Model):
    username = models.CharField(max_length=70)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.username

class Post(models.Model):
    author = models.CharField(max_length=70)
    text = models.CharField(max_length=300)

    def __str__(self):
        return self.text[:30]