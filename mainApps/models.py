from django.db import models

class Chart(models.Model):
    Crypto_Name = models.CharField(max_length=30)
    Crypto_Value = models.FloatField(max_length=10)

    def __str__(self):
        return self.Crypto_Name

