from django import forms
from .models import Chart
from django.forms import ModelForm

class ChartForm(ModelForm):
    class Meta:
        model = Chart
        fields = '__all__' 
        