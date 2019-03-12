from django.db import models

class Chart(models.Model):
    cryptocurrency_name = models.CharField(max_length=30)
    cryptocurrency_value = models.FloatField(max_length=15)

    def __str__(self):
        return self.cryptocurrency_name

