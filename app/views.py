from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, "app/index.html")

def mypage(request):
    return render(request, "app/mypage.html")

def game(request):
    return render(request, "app/suikagame.html")

def renshu(request):
    return render(request, "app/renshu.html")

def university(request):
    return render(request, "app/uni.html")

def department(request):
    return render(request, "app/department.html")

def aogaku(request):
    return render(request,"app/aogaku.html")

def dendai(request):
    return render(request,"app/university/dendai.html")

def dentu(request):
    return render(request, "app/dentu.html")