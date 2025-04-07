"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { useLanguage } from "@/app/contexts/language-context"
import { HeroSlideshow } from "@/app/components/hero-slideshow"

export default function MenuPage() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("rice")
  // Add a new state for the food type filter
  const [foodTypeFilter, setFoodTypeFilter] = useState("all") // "all", "veg", "nonveg"

  // Add this useEffect to handle URL parameters
  useEffect(() => {
    // Check if we have a category parameter in the URL
    const urlParams = new URLSearchParams(window.location.search)
    const categoryParam = urlParams.get("category")

    if (categoryParam && menuCategories.some((cat) => cat.id === categoryParam)) {
      setActiveCategory(categoryParam)
      // Scroll to the category section
      setTimeout(() => {
        const element = document.getElementById(`category-${categoryParam}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  // Category image mapping
  const categoryImages = {
    rice: "/images/menu/rice-bowl.jpg",
    chinese: "/images/menu/chinese-food.jpg",
    continental: "/images/menu/continental-food.jpg",
    mojitos: "/images/menu/mojito.jpg",
    juices: "/images/menu/fresh-juice.jpg",
    biryani: "/images/menu/biryani.jpg",
    starters: "/images/menu/starters-featured.png",
    combos: "/images/menu/combo-meal.jpg",
  }

  // Menu categories with translations
  const menuCategories = [
    {
      id: "rice",
      name: t("menu.category.rice"),
      items: [
        {
          name: t("menu.rice.pappu_avakaya"),
          description: t("menu.rice.pappu_avakaya.desc"),
          price: "₹100",
          image: "/images/menu/pappu-avakaya-rice.png",
          key: "menu.rice.pappu_avakaya",
          isVeg: true,
        },
        {
          name: t("menu.rice.sambar"),
          description: t("menu.rice.sambar.desc"),
          price: "₹80",
          image: "/images/menu/sambar-rice.png",
          key: "menu.rice.sambar",
          isVeg: true,
        },
        {
          name: t("menu.rice.nalla_karam"),
          description: t("menu.rice.nalla_karam.desc"),
          price: "₹80",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hYXFtMr4KVSJuqEnbBrqKYEVPWMpI4.png",
          key: "menu.rice.nalla_karam",
          isVeg: true,
        },
        {
          name: t("menu.rice.podeena"),
          description: t("menu.rice.podeena.desc"),
          price: "₹80",
          image: "/images/menu/egg-rice.png",
          key: "menu.rice.podeena",
          isVeg: true,
        },
        {
          name: t("menu.rice.tomato"),
          description: t("menu.rice.tomato.desc"),
          price: "₹50",
          image: "/images/menu/tomato-rice.png",
          key: "menu.rice.tomato",
          isVeg: true,
        },
        {
          name: t("menu.rice.lemon"),
          description: t("menu.rice.lemon.desc"),
          price: "₹50",
          image: "/images/menu/lemon-rice.png",
          key: "menu.rice.lemon",
          isVeg: true,
        },
        {
          name: t("menu.rice.egg"),
          description: t("menu.rice.egg.desc"),
          price: "₹80",
          image: "/images/menu/podeena-rice.png",
          key: "menu.rice.egg",
          isVeg: false,
        },
        {
          name: t("menu.rice.gongura"),
          description: t("menu.rice.gongura.desc"),
          price: "₹80",
          image: "/images/menu/gongura-rice.png",
          key: "menu.rice.gongura",
          isVeg: true,
        },
        {
          name: t("menu.rice.jeera"),
          description: t("menu.rice.jeera.desc"),
          price: "₹80",
          image: "/images/menu/jeera-rice.png",
          key: "menu.rice.jeera",
          isVeg: true,
        },
        {
          name: t("menu.rice.manchurian"),
          description: t("menu.rice.manchurian.desc"),
          price: "₹100",
          image: "/images/menu/manchurian-rice.jpeg",
          key: "menu.rice.manchurian",
          isVeg: true,
        },
        {
          name: t("menu.rice.chicken"),
          description: t("menu.rice.chicken.desc"),
          price: "₹150",
          image: "/images/menu/chicken-rice.png",
          key: "menu.rice.chicken",
          isVeg: false,
        },
        {
          name: t("menu.rice.veg_biryani"),
          description: t("menu.rice.veg_biryani.desc"),
          price: "₹120",
          image: "/images/menu/veg-biryani.png",
          key: "menu.rice.veg_biryani",
          isVeg: true,
        },
        {
          name: t("menu.rice.curd"),
          description: t("menu.rice.curd.desc"),
          price: "₹80",
          image: "/images/menu/curd-rice.png",
          key: "menu.rice.curd",
          isVeg: true,
        },
        {
          name: t("menu.rice.mini_meals"),
          description: t("menu.rice.mini_meals.desc"),
          price: "₹80",
          image: "/images/menu/mini-meals.png",
          key: "menu.rice.mini_meals",
          isVeg: true,
        },
        {
          name: t("menu.rice.paneer"),
          description: t("menu.rice.paneer.desc"),
          price: "₹110",
          image: "/images/menu/paneer-rice.png",
          key: "menu.rice.paneer",
          isVeg: true,
        },
        {
          name: t("menu.rice.cashew"),
          description: t("menu.rice.cashew.desc"),
          price: "₹130",
          image: "/images/menu/cashew-rice.png",
          key: "menu.rice.cashew",
          isVeg: true,
        },
        {
          name: t("menu.rice.sambar_chicken"),
          description: t("menu.rice.sambar_chicken.desc"),
          price: "₹150",
          image: "/images/menu/sambar-chicken-pakoda.png",
          key: "menu.rice.sambar_chicken",
          isVeg: false,
        },
      ],
    },
    {
      id: "chinese",
      name: t("menu.category.chinese"),
      items: [
        {
          name: t("menu.chinese.veg_noodles"),
          description: t("menu.chinese.veg_noodles.desc"),
          price: "₹69",
          image: "/images/menu/veg-noodles.png",
          key: "menu.chinese.veg_noodles",
          isVeg: true,
        },
        {
          name: t("menu.chinese.veg_fried_rice"),
          description: t("menu.chinese.veg_fried_rice.desc"),
          price: "₹69",
          image: "/images/menu/veg-fried-rice.png",
          key: "menu.chinese.veg_fried_rice",
          isVeg: true,
        },
        {
          name: t("menu.chinese.veg_manchurian"),
          description: t("menu.chinese.veg_manchurian.desc"),
          price: "₹69",
          image: "/images/menu/veg-manchuria.png",
          key: "menu.chinese.veg_manchurian",
          isVeg: true,
        },
        {
          name: t("menu.chinese.egg_noodles"),
          description: t("menu.chinese.egg_noodles.desc"),
          price: "₹79",
          image: "/images/menu/egg-noodles.png",
          key: "menu.chinese.egg_noodles",
          isVeg: false,
        },
        {
          name: t("menu.chinese.egg_fried_rice"),
          description: t("menu.chinese.egg_fried_rice.desc"),
          price: "₹79",
          image: "/images/menu/egg-fried-rice.png",
          key: "menu.chinese.egg_fried_rice",
          isVeg: false,
        },
        {
          name: t("menu.chinese.egg_manchurian"),
          description: t("menu.chinese.egg_manchurian.desc"),
          price: "₹79",
          image: "/images/menu/egg-manchurian.png",
          key: "menu.chinese.egg_manchurian",
          isVeg: false,
        },
        {
          name: t("menu.chinese.double_egg_noodles"),
          description: t("menu.chinese.double_egg_noodles.desc"),
          price: "₹89",
          image: "/images/menu/double-egg-noodles.png",
          key: "menu.chinese.double_egg_noodles",
          isVeg: false,
        },
        {
          name: t("menu.chinese.double_egg_fried_rice"),
          description: t("menu.chinese.double_egg_fried_rice.desc"),
          price: "₹89",
          image: "/images/menu/double-egg-fried-rice.png",
          key: "menu.chinese.double_egg_fried_rice",
          isVeg: false,
        },
        {
          name: t("menu.chinese.double_egg_manchurian"),
          description: t("menu.chinese.double_egg_manchurian.desc"),
          price: "₹89",
          image: "/images/menu/double-egg-manchurian.png",
          key: "menu.chinese.double_egg_manchurian",
          isVeg: false,
        },
        {
          name: t("menu.chinese.chicken_noodles"),
          description: t("menu.chinese.chicken_noodles.desc"),
          price: "₹99",
          image: "/images/menu/chicken-noodles.png",
          key: "menu.chinese.chicken_noodles",
          isVeg: false,
        },
        {
          name: t("menu.chinese.chicken_fried_rice"),
          description: t("menu.chinese.chicken_fried_rice.desc"),
          price: "₹99",
          image: "/images/menu/chicken-fried-rice.png",
          key: "menu.chinese.chicken_fried_rice",
          isVeg: false,
        },
        {
          name: t("menu.chinese.chicken_manchurian"),
          description: t("menu.chinese.chicken_manchurian.desc"),
          price: "₹99",
          image: "/images/menu/chicken-manchurian.png",
          key: "menu.chinese.chicken_manchurian",
          isVeg: false,
        },
        {
          name: t("menu.chinese.double_egg_chicken_fried_rice"),
          description: t("menu.chinese.double_egg_chicken_fried_rice.desc"),
          price: "₹109",
          image: "/images/menu/double-egg-chicken-fried-rice.png",
          key: "menu.chinese.double_egg_chicken_fried_rice",
          isVeg: false,
        },
        {
          name: t("menu.chinese.special_chicken_noodles"),
          description: t("menu.chinese.special_chicken_noodles.desc"),
          price: "₹109",
          image: "/images/menu/special-chicken-noodles.png",
          key: "menu.chinese.special_chicken_noodles",
          isVeg: false,
        },
        {
          name: t("menu.chinese.special_chicken_manchurian"),
          description: t("menu.chinese.special_chicken_manchurian.desc"),
          price: "₹109",
          image: "/images/menu/special-chicken-manchurian.png",
          key: "menu.chinese.special_chicken_manchurian",
          isVeg: false,
        },
        {
          name: t("menu.chinese.schezwan_chicken_fried_rice"),
          description: t("menu.chinese.schezwan_chicken_fried_rice.desc"),
          price: "₹119",
          image: "/images/menu/schezwan-chicken-fried-rice.png",
          key: "menu.chinese.schezwan_chicken_fried_rice",
          isVeg: false,
        },
      ],
    },
    {
      id: "continental",
      name: t("menu.category.continental"),
      items: [
        {
          name: t("menu.continental.french_fries"),
          description: t("menu.continental.french_fries.desc"),
          price: "₹49",
          image: "/images/menu/french-fries.png",
          key: "menu.continental.french_fries",
          isVeg: true,
        },
        {
          name: t("menu.continental.veg_sandwich"),
          description: t("menu.continental.veg_sandwich.desc"),
          price: "₹69",
          image: "/images/menu/veg-sandwich.png",
          key: "menu.continental.veg_sandwich",
          isVeg: true,
        },
        {
          name: t("menu.continental.veg_burger"),
          description: t("menu.continental.veg_burger.desc"),
          price: "₹69",
          image: "/images/menu/veg-burger.png",
          key: "menu.continental.veg_burger",
          isVeg: true,
        },
        {
          name: t("menu.continental.potato_spring"),
          description: t("menu.continental.potato_spring.desc"),
          price: "₹69",
          image: "/images/menu/potato-spring.png",
          key: "menu.continental.potato_spring",
          isVeg: true,
        },
        {
          name: t("menu.continental.paneer_sandwich"),
          description: t("menu.continental.paneer_sandwich.desc"),
          price: "₹79",
          image: "/images/menu/paneer-sandwich.jpeg",
          key: "menu.continental.paneer_sandwich",
          isVeg: true,
        },
        {
          name: t("menu.continental.chicken_sandwich"),
          description: t("menu.continental.chicken_sandwich.desc"),
          price: "₹99",
          image: "/images/menu/chicken-sandwich.png",
          key: "menu.continental.chicken_sandwich",
          isVeg: false,
        },
        {
          name: t("menu.continental.chicken_burger"),
          description: t("menu.continental.chicken_burger.desc"),
          price: "₹99",
          image: "/images/menu/chicken-burger.png",
          key: "menu.continental.chicken_burger",
          isVeg: false,
        },
      ],
    },
    {
      id: "mojitos",
      name: t("menu.category.mojitos"),
      items: [
        {
          name: t("menu.mojitos.classic"),
          description: t("menu.mojitos.classic.desc"),
          price: "₹79",
          image: "/images/menu/classic-mojito.png",
          key: "menu.mojitos.classic",
          isVeg: true,
        },
        {
          name: t("menu.mojitos.lime_mint"),
          description: t("menu.mojitos.lime_mint.desc"),
          price: "₹79",
          image: "/images/menu/lime-mint-mojito.png",
          key: "menu.mojitos.lime_mint",
          isVeg: true,
        },
        {
          name: t("menu.mojitos.orange"),
          description: t("menu.mojitos.orange.desc"),
          price: "₹79",
          image: "/images/menu/orange-mojito.png",
          key: "menu.mojitos.orange",
          isVeg: true,
        },
        {
          name: t("menu.mojitos.green_apple"),
          description: t("menu.mojitos.green_apple.desc"),
          price: "₹79",
          image: "/images/menu/green-apple-mojito.png",
          key: "menu.mojitos.green_apple",
          isVeg: true,
        },
        {
          name: t("menu.mojitos.kiwi"),
          description: t("menu.mojitos.kiwi.desc"),
          price: "₹79",
          image: "/images/menu/kiwi-mojito.png",
          key: "menu.mojitos.kiwi",
          isVeg: true,
        },
        {
          name: t("menu.mojitos.black_currant"),
          description: t("menu.mojitos.black_currant.desc"),
          price: "₹79",
          image: "/images/menu/black-currant-mojito.png",
          key: "menu.mojitos.black_currant",
          isVeg: true,
        },
        {
          name: t("menu.mojitos.strawberry"),
          description: t("menu.mojitos.strawberry.desc"),
          price: "₹79",
          image: "/images/menu/strawberry-mojito.png",
          key: "menu.mojitos.strawberry",
          isVeg: true,
        },
      ],
    },
    {
      id: "juices",
      name: t("menu.category.juices"),
      items: [
        {
          name: t("menu.juices.banana"),
          description: t("menu.juices.banana.desc"),
          price: "₹30",
          image: "/images/menu/banana-juice.png",
          key: "menu.juices.banana",
          isVeg: true,
        },
        {
          name: t("menu.juices.watermelon"),
          description: t("menu.juices.watermelon.desc"),
          price: "₹30",
          image: "/images/menu/watermelon-juice.png",
          key: "menu.juices.watermelon",
          isVeg: true,
        },
        {
          name: t("menu.juices.musk_melon"),
          description: t("menu.juices.musk_melon.desc"),
          price: "₹40",
          image: "/images/menu/musk-melon-juice.png",
          key: "menu.juices.musk_melon",
          isVeg: true,
        },
        {
          name: t("menu.juices.pineapple"),
          description: t("menu.juices.pineapple.desc"),
          price: "₹40",
          image: "/images/menu/pineapple-juice.png",
          key: "menu.juices.pineapple",
          isVeg: true,
        },
        {
          name: t("menu.juices.sapota"),
          description: t("menu.juices.sapota.desc"),
          price: "₹40",
          image: "/images/menu/sapota-juice.png",
          key: "menu.juices.sapota",
          isVeg: true,
        },
        {
          name: t("menu.juices.grape"),
          description: t("menu.juices.grape.desc"),
          price: "₹40",
          image: "/images/menu/grape-juice.png",
          key: "menu.juices.grape",
          isVeg: true,
        },
        {
          name: t("menu.juices.carrot_milk"),
          description: t("menu.juices.carrot_milk.desc"),
          price: "₹40",
          image: "/images/menu/carrot-juice.png",
          key: "menu.juices.carrot_milk",
          isVeg: true,
        },
        {
          name: t("menu.juices.beetroot_milk"),
          description: t("menu.juices.beetroot_milk.desc"),
          price: "₹40",
          image: "/images/menu/beetroot-juice.png",
          key: "menu.juices.beetroot_milk",
          isVeg: true,
        },
        {
          name: t("menu.juices.carrot_beetroot_mix"),
          description: t("menu.juices.carrot_beetroot_mix.desc"),
          price: "₹50",
          image: "/images/menu/carrot-beetroot-mix.png",
          key: "menu.juices.carrot_beetroot_mix",
          isVeg: true,
        },
        {
          name: t("menu.juices.carrot_pure"),
          description: t("menu.juices.carrot_pure.desc"),
          price: "₹50",
          image: "/images/menu/carrot-pure.png",
          key: "menu.juices.carrot_pure",
          isVeg: true,
        },
        {
          name: t("menu.juices.beetroot_pure"),
          description: t("menu.juices.beetroot_pure.desc"),
          price: "₹50",
          image: "/images/menu/beetroot-pure.png",
          key: "menu.juices.beetroot_pure",
          isVeg: true,
        },
        {
          name: t("menu.juices.apple"),
          description: t("menu.juices.apple.desc"),
          price: "₹50",
          image: "/images/menu/apple-juice.png",
          key: "menu.juices.apple",
          isVeg: true,
        },
        {
          name: t("menu.juices.pomegranate"),
          description: t("menu.juices.pomegranate.desc"),
          price: "₹50",
          image: "/images/menu/pomegranate-juice.png",
          key: "menu.juices.pomegranate",
          isVeg: true,
        },
        {
          name: t("menu.juices.abc"),
          description: t("menu.juices.abc.desc"),
          price: "₹60",
          image: "/images/menu/abc-juice.png",
          key: "menu.juices.abc",
          isVeg: true,
        },
        {
          name: t("menu.juices.carrot_beetroot_mix_pure"),
          description: t("menu.juices.carrot_beetroot_mix_pure.desc"),
          price: "₹60",
          image: "/images/menu/carrot-beetroot-mix-pure.png",
          key: "menu.juices.carrot_beetroot_mix_pure",
          isVeg: true,
        },
      ],
    },
    {
      id: "biryani",
      name: t("menu.category.biryani"),
      items: [
        {
          name: t("menu.biryani.rice"),
          description: t("menu.biryani.rice.desc"),
          price: "₹99",
          image: "/images/menu/biryani-rice.png",
          key: "menu.biryani.rice",
          isVeg: true,
        },
        {
          name: t("menu.biryani.chicken_dum"),
          description: t("menu.biryani.chicken_dum.desc"),
          price: "₹179",
          image: "/images/menu/chicken-dum.png",
          key: "menu.biryani.chicken_dum",
          isVeg: false,
        },
        {
          name: t("menu.biryani.chicken_fry"),
          description: t("menu.biryani.chicken_fry.desc"),
          price: "₹199",
          image: "/images/menu/chicken-fry-biryani.png",
          key: "menu.biryani.chicken_fry",
          isVeg: false,
        },
        {
          name: t("menu.biryani.egg"),
          description: t("menu.biryani.egg.desc"),
          price: "₹149",
          image: "/images/menu/egg-biryani.png",
          key: "menu.biryani.egg",
          isVeg: false,
        },
        {
          name: t("menu.biryani.lollipop"),
          description: t("menu.biryani.lollipop.desc"),
          price: "₹229",
          image: "/images/menu/lollipop-biryani.png",
          key: "menu.biryani.lollipop",
          isVeg: false,
        },
        {
          name: t("menu.biryani.special_chicken"),
          description: t("menu.biryani.special_chicken.desc"),
          price: "₹249",
          image: "/images/menu/special-chicken-biryani.png",
          key: "menu.biryani.special_chicken",
          isVeg: false,
        },
        {
          name: t("menu.biryani.wings"),
          description: t("menu.biryani.wings.desc"),
          price: "₹229",
          image: "/images/menu/wings-biryani.png",
          key: "menu.biryani.wings",
          isVeg: false,
        },
        // Add Veg Biryani here
        {
          name: t("menu.biryani.veg"),
          description: t("menu.biryani.veg.desc"),
          price: "₹120",
          image: "/images/menu/veg-biryani.png",
          key: "menu.biryani.veg",
          isVeg: true,
        },
      ],
    },
    {
      id: "starters",
      name: t("menu.category.starters"),
      items: [
        {
          name: t("menu.starters.chilli_paneer"),
          description: t("menu.starters.chilli_paneer.desc"),
          price: "₹99",
          image: "/images/menu/chilli-paneer.png",
          key: "menu.starters.chilli_paneer",
          isVeg: true,
        },
        {
          name: t("menu.starters.paneer_65"),
          description: t("menu.starters.paneer_65.desc"),
          price: "₹99",
          image: "/images/menu/paneer-65.png",
          key: "menu.starters.paneer_65",
          isVeg: true,
        },
        {
          name: t("menu.starters.veg_manchuria"),
          description: t("menu.starters.veg_manchuria.desc"),
          price: "₹99",
          image: "/images/menu/veg-manchuria.png",
          key: "menu.starters.veg_manchuria",
          isVeg: true,
        },
        {
          name: t("menu.starters.chicken_555"),
          description: t("menu.starters.chicken_555.desc"),
          price: "₹179",
          image: "/images/menu/chicken-555.png",
          key: "menu.starters.chicken_555",
          isVeg: false,
        },
        {
          name: t("menu.starters.chicken_65"),
          description: t("menu.starters.chicken_65.desc"),
          price: "₹169",
          image: "/images/menu/chicken-65.png",
          key: "menu.starters.chicken_65",
          isVeg: false,
        },
        {
          name: t("menu.starters.chicken_lollipop"),
          description: t("menu.starters.chicken_lollipop.desc"),
          price: "₹199",
          image: "/images/menu/chicken-lollipop.png",
          key: "menu.starters.chicken_lollipop",
          isVeg: false,
        },
        {
          name: t("menu.starters.chicken_fried_wings"),
          description: t("menu.starters.chicken_fried_wings.desc"),
          price: "₹199",
          image: "/images/menu/chicken-fried-wings.png",
          key: "menu.starters.chicken_fried_wings",
          isVeg: false,
        },
        {
          name: t("menu.starters.chicken_manchuria"),
          description: t("menu.starters.chicken_manchuria.desc"),
          price: "₹129",
          image: "/images/menu/chicken-manchuria.png",
          key: "menu.starters.chicken_manchuria",
          isVeg: false,
        },
        {
          name: t("menu.starters.chilli_chicken"),
          description: t("menu.starters.chilli_chicken.desc"),
          price: "₹149",
          image: "/images/menu/chilli-chicken.png",
          key: "menu.starters.chilli_chicken",
          isVeg: false,
        },
        {
          name: t("menu.starters.chicken_majestic"),
          description: t("menu.starters.chicken_majestic.desc"),
          price: "₹179",
          image: "/images/menu/chicken-majestic.png",
          key: "menu.starters.chicken_majestic",
          isVeg: false,
        },
      ],
    },
    {
      id: "combos",
      name: t("menu.category.combos"),
      items: [
        {
          name: t("menu.combos.veg_classic"),
          description: t("menu.combos.veg_classic.desc"),
          price: "₹149",
          image: "/images/menu/veg-classic-combo.png",
          key: "menu.combos.veg_classic",
          isVeg: true,
        },
        {
          name: t("menu.combos.veg_delight"),
          description: t("menu.combos.veg_delight.desc"),
          price: "₹179",
          image: "/images/menu/veg-delight-combo.png",
          key: "menu.combos.veg_delight",
          isVeg: true,
        },
        {
          name: t("menu.combos.paneer_treat"),
          description: t("menu.combos.paneer_treat.desc"),
          price: "₹199",
          image: "/images/menu/paneer-treat-combo.png",
          key: "menu.combos.paneer_treat",
          isVeg: true,
        },
        {
          name: t("menu.combos.mr_chicken"),
          description: t("menu.combos.mr_chicken.desc"),
          price: "₹229",
          image: "/images/menu/mr-chicken-combo.png",
          key: "menu.combos.mr_chicken",
          isVeg: false,
        },
        {
          name: t("menu.combos.spicy_chicken"),
          description: t("menu.combos.spicy_chicken.desc"),
          price: "₹249",
          image: "/images/menu/spicy-chicken-combo.png",
          key: "menu.combos.spicy_chicken",
          isVeg: false,
        },
        {
          name: t("menu.combos.chicken_feast"),
          description: t("menu.combos.chicken_feast.desc"),
          price: "₹349",
          image: "/images/menu/chicken-feast-combo.png",
          key: "menu.combos.chicken_feast",
          isVeg: false,
        },
      ],
    },
  ]

  // First, update the renderMenuItem function to include veg/non-veg symbols
  const renderMenuItem = (item, categoryId, index) => (
    <div key={`${categoryId}-${index}`} className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
      <div className="relative h-64 bg-gray-200">
        <Image
          src={item.image || categoryImages[categoryId] || "/placeholder.svg?height=300&width=400"}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Price tag on the image */}
        <div className="absolute bottom-3 left-3 bg-black/70 dark:bg-black/90 text-white px-2 py-1 rounded">
          <span className="font-semibold">{item.price}</span>
        </div>
        {/* Veg/Non-veg symbol on the image - hide for mojitos and juices */}
        {categoryId !== "mojitos" && categoryId !== "juices" && (
          <div className="absolute top-3 right-3">
            {item.isVeg ? (
              <div className="w-6 h-6 border-2 border-green-600 bg-white p-0.5 rounded-sm">
                <div className="w-full h-full bg-green-600 rounded-full"></div>
              </div>
            ) : (
              <div className="w-6 h-6 border-2 border-red-600 bg-white p-0.5 rounded-sm">
                <div className="w-full h-full bg-red-600 rounded-sm"></div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.name}</h3>
          {/* Veg/Non-veg symbol next to the name - hide for mojitos and juices */}
          {categoryId !== "mojitos" && categoryId !== "juices" && (
            <div className="ml-2">
              {item.isVeg ? (
                <div className="w-5 h-5 border border-green-600 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
              ) : (
                <div className="w-5 h-5 border border-red-600 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
                </div>
              )}
            </div>
          )}
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header activePage="menu" />

      {/* Menu Hero */}
      <section className="relative h-[300px]">
        {/* Hero Slideshow */}
        <HeroSlideshow />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">{t("menu.hero.title")}</h1>
          <p className="max-w-md mt-4">{t("menu.hero.subtitle")}</p>
        </div>
      </section>

      {/* Current Promotion Banner */}
      <section className="py-6 bg-gray-50">
        <div className="container px-4 mx-auto">
          <SpecialOffersCarousel />
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors ${
                activeCategory === "all" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t("menu.all.items")}
            </button>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors ${
                  activeCategory === category.id ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Add the filter buttons section after the menu categories section */}
      <section className="py-4 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center items-center gap-4">
            <span className="text-gray-700 font-medium">{t("menu.filter.by")}</span>
            <div className="flex bg-white rounded-full overflow-hidden border">
              <button
                onClick={() => setFoodTypeFilter("all")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  foodTypeFilter === "all" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {t("menu.filter.all")}
              </button>
              <button
                onClick={() => setFoodTypeFilter("veg")}
                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  foodTypeFilter === "veg" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                {t("menu.filter.veg")}
              </button>
              <button
                onClick={() => setFoodTypeFilter("nonveg")}
                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  foodTypeFilter === "nonveg" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
                {t("menu.filter.nonveg")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          {activeCategory === "all" ? (
            // Display all items without category headings, but apply food type filter
            // Always include mojitos and juices regardless of filter
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {menuCategories.flatMap((category) =>
                category.items
                  .filter((item) =>
                    // Always include mojitos and juices categories
                    category.id === "mojitos" || category.id === "juices"
                      ? true
                      : foodTypeFilter === "all"
                        ? true
                        : foodTypeFilter === "veg"
                          ? item.isVeg
                          : !item.isVeg,
                  )
                  .map((item, index) => renderMenuItem(item, category.id, index)),
              )}
            </div>
          ) : (
            // Display only the active category with food type filter
            // For mojitos and juices, don't apply the filter
            menuCategories.map(
              (category) =>
                activeCategory === category.id && (
                  <div key={category.id} id={`category-${category.id}`}>
                    <h2 className="mb-8 text-3xl font-bold text-center">{category.name}</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {category.items
                        .filter((item) =>
                          // Don't apply filter for mojitos and juices
                          category.id === "mojitos" || category.id === "juices"
                            ? true
                            : foodTypeFilter === "all"
                              ? true
                              : foodTypeFilter === "veg"
                                ? item.isVeg
                                : !item.isVeg,
                        )
                        .map((item, index) => renderMenuItem(item, category.id, index))}
                    </div>
                  </div>
                ),
            )
          )}
        </div>
      </section>

      {/* Special Dietary Needs */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold">{t("menu.dietary.title")}</h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">{t("menu.dietary.description")}</p>
          <Button className="mt-8" variant="outline" asChild>
            <Link href="/contact">{t("menu.dietary.button")}</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Update the SpecialOffersCarousel function to use translations
function SpecialOffersCarousel() {
  const { t } = useLanguage()

  const offer = {
    title: t("offers.title"),
    description: t("offers.description"),
    validUntil: t("offers.validUntil"),
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg border border-amber-200">
        <div className="w-full p-8 text-center bg-amber-50">
          <h3 className="text-2xl font-bold text-amber-800">{offer.title}</h3>
          <p className="mt-4 text-lg text-amber-900">{offer.description}</p>
          <p className="mt-2 text-sm text-amber-700">{offer.validUntil}</p>
        </div>
      </div>
    </div>
  )
}

