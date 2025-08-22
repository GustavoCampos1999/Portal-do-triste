const allMonstersData = [
  {
    "name": "A Weak Spot",
    "hp": 435000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/A_Weak_Spot.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Abominable Servant",
    "hp": 8900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Abominable_Servant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Abyssador",
    "hp": 340000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Abyssador.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Abyssal Calamary",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Abyssal_Calamary.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Achad",
    "hp": 185,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Achad.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Acid Blob",
    "hp": 250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Acid_Blob.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Acolyte of Darkness",
    "hp": 325,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Acolyte_of_Darkness.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Acolyte of the Cult",
    "hp": 390,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Acolyte_of_the_Cult.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Adept of the Cult",
    "hp": 430,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Adept_of_the_Cult.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Adult Goanna",
    "hp": 8300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Adult_Goanna.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Adventurer",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Adventurer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Afflicted Strider",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Afflicted_Strider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Aftershock",
    "hp": 105000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Aftershock.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Aggressive Chicken",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Aggressive_Chicken.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Aggressive Matter",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Aggressive_Matter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.65
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Agrestic Chicken",
    "hp": 15,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Agrestic_Chicken.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ahau",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ahau.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Albino Dragon",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Albino_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Alchemistical Container",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Alchemistical_Container.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Alptramun",
    "hp": 320000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Alptramun.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Amazon",
    "hp": 110,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Amazon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Amenef the Burning",
    "hp": 26000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Amenef_the_Burning.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "An Observer Eye",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/An_Observer_Eye.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Ancient Lion Knight",
    "hp": 9100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ancient_Lion_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.3
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ancient Scarab",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ancient_Scarab.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ancient Ugly Monster",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ancient_Ugly_Monster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Angry Adventurer",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Angry_Adventurer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Angry Demon",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Angry_Demon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1.12
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.12
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Angry Elemental",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Angry_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Angry Plant",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Angry_Plant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Angry Plant Thing",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Angry_Plant_Thing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.55
      },
      {
        "type": "holy",
        "multiplier": 0.55
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 0.55
      },
      {
        "type": "ice",
        "multiplier": 0.55
      },
      {
        "type": "energy",
        "multiplier": 0.55
      },
      {
        "type": "earth",
        "multiplier": 0.55
      }
    ]
  },
  {
    "name": "Angry Sugar Fairy",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Angry_Sugar_Fairy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Animated Clomp",
    "hp": 900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Clomp.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Cyclops",
    "hp": 260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Cyclops.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Feather",
    "hp": 13000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Feather.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.18
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Guzzlemaw",
    "hp": 6400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Guzzlemaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Moohtant",
    "hp": 3200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Moohtant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Mummy",
    "hp": 240,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Mummy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Ogre Brute",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Ogre_Brute.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Ogre Savage",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Ogre_Savage.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Ogre Shaman",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Ogre_Shaman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Rotworm",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Rotworm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Skunk",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Skunk.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Animated Snowman",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Animated_Snowman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Anmothra",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Anmothra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Annihilon",
    "hp": 46500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Annihilon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Anomaly",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Anomaly.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Antenna",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Antenna.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Apprentice Sheng",
    "hp": 95,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Apprentice_Sheng.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Arachir the Ancient One",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Arachir_the_Ancient_One.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Arachnophobica",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Arachnophobica.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.4
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Arbaziloth",
    "hp": 360000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Arbaziloth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Arctic Faun",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Arctic_Faun.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Armadile",
    "hp": 3800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Armadile.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Armenius (Creature)",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Armenius_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Arthei",
    "hp": 4200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Arthei.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Arthom the Hunter",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Arthom_the_Hunter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ashmunrah",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ashmunrah.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Askarak Demon",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Askarak_Demon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 0.4
      },
      {
        "type": "energy",
        "multiplier": 0.4
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Askarak Lord",
    "hp": 2100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Askarak_Lord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.35
      },
      {
        "type": "energy",
        "multiplier": 0.35
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Askarak Prince",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Askarak_Prince.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "energy",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Assassin",
    "hp": 175,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Assassin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Atab",
    "hp": 8100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Atab.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Avalanche (Creature)",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Avalanche_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Axeitus Headbanger",
    "hp": 365,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Axeitus_Headbanger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ayana the Crimson Curse",
    "hp": 17000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ayana_the_Crimson_Curse.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Azerus",
    "hp": 26000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Azerus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Azure Frog",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Azure_Frog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Baby Pet of Chayenne",
    "hp": 380,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Baby_Pet_of_Chayenne.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bad Thought",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bad_Thought.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Badger",
    "hp": 23,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Badger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bakragore",
    "hp": 660000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bakragore.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Baleful Bunny",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Baleful_Bunny.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Bandit",
    "hp": 245,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bandit.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bane Bringer",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bane_Bringer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "death",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Bane Lord",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bane_Lord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "death",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "fire",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "ice",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "energy",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "earth",
        "multiplier": 0.050000000000000044
      }
    ]
  },
  {
    "name": "Bane of Light",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bane_of_Light.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Banshee",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Banshee.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Barbaria",
    "hp": 345,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Barbaria.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Barbarian Bloodwalker",
    "hp": 305,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Barbarian_Bloodwalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Barbarian Brutetamer",
    "hp": 145,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Barbarian_Brutetamer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Barbarian Headsplitter",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Barbarian_Headsplitter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Barbarian Skullhunter",
    "hp": 135,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Barbarian_Skullhunter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Barkless Devotee",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Barkless_Devotee.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.83
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Barkless Fanatic",
    "hp": 3200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Barkless_Fanatic.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.83
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Baron Brute",
    "hp": 5025,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Baron_Brute.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bashmu",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bashmu.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Bat",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Battlemaster Zunzu",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Battlemaster_Zunzu.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bear",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bear.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bear (Nostalgia)",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bear_(Nostalgia).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Behemoth",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Behemoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Bellicose Orger",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bellicose_Orger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Berrypest",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Berrypest.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Berserker Chicken",
    "hp": 465,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Berserker_Chicken.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Betrayed Wraith",
    "hp": 4200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Betrayed_Wraith.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bibby Bloodbath",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bibby_Bloodbath.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Big Boss Trolliver",
    "hp": 140,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Big_Boss_Trolliver.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Biting Book",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Biting_Book.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Black Cobra",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Black_Cobra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Black Knight",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Black_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.08
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Black Sheep",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Black_Sheep.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Black Sphinx Acolyte",
    "hp": 8100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Black_Sphinx_Acolyte.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.3
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Black Vixen",
    "hp": 3200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Black_Vixen.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Blazing Fire Elemental",
    "hp": 650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blazing_Fire_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Blemished Spawn",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blemished_Spawn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Blight Bug",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blight_Bug.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Blight Mariner",
    "hp": 16500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blight_Mariner.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Blightwalker",
    "hp": 8100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blightwalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.3
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Blistering Fire Elemental",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blistering_Fire_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Bloated Man-Maggot",
    "hp": 31700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bloated_Man-Maggot.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.55
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Blocking Stalagmite",
    "hp": 10500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blocking_Stalagmite.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Blood Beast",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blood_Beast.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Blood Crab",
    "hp": 290,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blood_Crab.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Blood Hand",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blood_Hand.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Blood Priest",
    "hp": 820,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blood_Priest.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.08
      },
      {
        "type": "holy",
        "multiplier": 1.08
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.08
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Blood Tear",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blood_Tear.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bloodback",
    "hp": 5200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bloodback.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Bloodjaw",
    "hp": 40000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bloodjaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bloodpaw",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bloodpaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Bloom of Doom",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bloom_of_Doom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Blue Djinn",
    "hp": 330,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Blue_Djinn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.13
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bluebeak",
    "hp": 2430,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bluebeak.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Boar",
    "hp": 198,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Boar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Boar Man",
    "hp": 9200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Boar_Man.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Bog Frog",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bog_Frog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bog Raider",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bog_Raider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Bolfrim (Creature)",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bolfrim_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bone Jaw",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bone_Jaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bonebeast",
    "hp": 515,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bonebeast.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bonelord",
    "hp": 260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bonelord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bonelord (Nostalgia)",
    "hp": 260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bonelord_(Nostalgia).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bonny Bunny",
    "hp": 200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bonny_Bunny.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bony Sea Devil",
    "hp": 24000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bony_Sea_Devil.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.4
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Boogey",
    "hp": 930,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Boogey.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Boogy",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Boogy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Boreth",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Boreth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bovinus",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bovinus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Brachiodemon",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Brachiodemon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.35
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bragrumol",
    "hp": 38000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bragrumol.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Brain Squid",
    "hp": 18000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Brain_Squid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Braindeath",
    "hp": 1225,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Braindeath.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Bramble Wyrmling",
    "hp": 2350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bramble_Wyrmling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Branchy Crawler",
    "hp": 27000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Branchy_Crawler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 1.09
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Breach Brood",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Breach_Brood.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Bretzecutioner",
    "hp": 5600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bretzecutioner.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Bride of Night",
    "hp": 275,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bride_of_Night.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Brimstone Bug",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Brimstone_Bug.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Brinebrute Inferniarch",
    "hp": 32000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Brinebrute_Inferniarch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Brittle Skeleton",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Brittle_Skeleton.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Broken Shaper",
    "hp": 2200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Broken_Shaper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Brokul",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Brokul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Broodrider Inferniarch",
    "hp": 9600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Broodrider_Inferniarch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Bruise Payne",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bruise_Payne.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.35
      }
    ]
  },
  {
    "name": "Bruton",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bruton.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.55
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Brutus Bloodbeard",
    "hp": 1555,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Brutus_Bloodbeard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 1.01
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bug",
    "hp": 29,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bug.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bug (Nostalgia)",
    "hp": 29,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bug_(Nostalgia).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bulltaur Alchemist",
    "hp": 5690,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bulltaur_Alchemist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Bulltaur Brute",
    "hp": 6560,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bulltaur_Brute.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Bulltaur Forgepriest",
    "hp": 6840,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bulltaur_Forgepriest.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Bullwark",
    "hp": 72000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Bullwark.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Burning Book",
    "hp": 18000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Burning_Book.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Burning Gladiator",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Burning_Gladiator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Burster",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Burster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Burster Spectre",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Burster_Spectre.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Butterfly (Blue)",
    "hp": 2,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Butterfly_(Blue).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Butterfly (Purple)",
    "hp": 2,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Butterfly_(Purple).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Butterfly (Red)",
    "hp": 2,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Butterfly_(Red).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Butterfly (Yellow)",
    "hp": 2,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Butterfly_(Yellow).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cake Golem",
    "hp": 444,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cake_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "death",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "fire",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "ice",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0.050000000000000044
      }
    ]
  },
  {
    "name": "Calamary",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Calamary.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Candy Floss Elemental",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Candy_Floss_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.6
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Candy Horror",
    "hp": 3100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Candy_Horror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Canopic Jar",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Canopic_Jar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Capricious Phantom",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Capricious_Phantom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Captain Jones",
    "hp": 555,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Captain_Jones.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Carniphila",
    "hp": 255,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Carniphila.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Carnisylvan Sapling",
    "hp": 750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Carnisylvan_Sapling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Carnivorous Butterfly",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Carnivorous_Butterfly.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Carnivostrich",
    "hp": 8250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Carnivostrich.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Carrion Worm",
    "hp": 145,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Carrion_Worm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Cart Packed with Gold",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cart_Packed_with_Gold.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cat",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cave Chimera",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cave_Chimera.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Cave Devourer",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cave_Devourer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cave Hydra",
    "hp": 2350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cave_Hydra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cave Parrot",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cave_Parrot.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cave Rat",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cave_Rat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cave Spider",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cave_Spider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.3
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cellar Rat",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cellar_Rat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Centipede",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Centipede.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cerebellum",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cerebellum.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": -10
      },
      {
        "type": "earth",
        "multiplier": 1.5
      }
    ]
  },
  {
    "name": "Chakoya Toolshaper",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chakoya_Toolshaper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Chakoya Tribewarden",
    "hp": 68,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chakoya_Tribewarden.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Chakoya Windcaller",
    "hp": 84,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chakoya_Windcaller.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.08
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Charged Anomaly",
    "hp": 18000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Charged_Anomaly.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Charged Energy Elemental",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Charged_Energy_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Charger",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Charger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Charging Outburst",
    "hp": 12000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Charging_Outburst.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "energy",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Chasm Spawn",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chasm_Spawn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.3
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Chayenne (Creature)",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chayenne_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cheeky Sugar Cube",
    "hp": 28,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cheeky_Sugar_Cube.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Cheese Thief",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cheese_Thief.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Chicken",
    "hp": 15,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chicken.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Chikhaton",
    "hp": 20000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chikhaton.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Chizzoron the Distorter",
    "hp": 16000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chizzoron_the_Distorter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Chocolate Blob",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chocolate_Blob.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.65
      }
    ]
  },
  {
    "name": "Choking Fear",
    "hp": 5800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Choking_Fear.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.98
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Chopper",
    "hp": 7200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Chopper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cinder Wyrmling",
    "hp": 2350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cinder_Wyrmling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Clay Guardian",
    "hp": 625,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Clay_Guardian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cliff Strider",
    "hp": 9400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cliff_Strider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cloak of Terror",
    "hp": 28000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cloak_of_Terror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.4
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Clomp",
    "hp": 900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Clomp.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Clutter",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Clutter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cobra",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cobra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cobra Assassin",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cobra_Assassin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cobra Scout",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cobra_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cobra Vizier",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cobra_Vizier.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Coldheart",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Coldheart.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Colerian the Barbarian",
    "hp": 265,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Colerian_the_Barbarian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Common Beetle",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Common_Beetle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Containment Machine",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Containment_Machine.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Control Tower",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Control_Tower.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0.44999999999999996
      }
    ]
  },
  {
    "name": "Converter",
    "hp": 29600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Converter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.2
      },
      {
        "type": "holy",
        "multiplier": 0.65
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Coral Frog",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Coral_Frog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Corrupt Naga",
    "hp": 5990,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Corrupt_Naga.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Corrupted Soul",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Corrupted_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "Corym Charlatan",
    "hp": 250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Corym_Charlatan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Corym Skirmisher",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Corym_Skirmisher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Corym Vanguard",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Corym_Vanguard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cosmic Energy Prism A",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cosmic_Energy_Prism_A.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cosmic Energy Prism B",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cosmic_Energy_Prism_B.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cosmic Energy Prism C",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cosmic_Energy_Prism_C.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cosmic Energy Prism D",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cosmic_Energy_Prism_D.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Count Tofifti (Creature)",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Count_Tofifti_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Count Vlarkorth",
    "hp": 300000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Count_Vlarkorth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Countess Sorrow",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Countess_Sorrow.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Courage Leech",
    "hp": 27000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Courage_Leech.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.25
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Cow",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cow.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Crab",
    "hp": 55,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crab.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Craban (Creature)",
    "hp": 300000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Craban_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Crape Man",
    "hp": 9150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crape_Man.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Crawler",
    "hp": 1450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crawler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1.08
      },
      {
        "type": "ice",
        "multiplier": 1.07
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Crazed Beggar",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crazed_Beggar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Crazed Dwarf",
    "hp": 105,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crazed_Dwarf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Crazed Summer Rearguard",
    "hp": 5300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crazed_Summer_Rearguard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Crazed Summer Vanguard",
    "hp": 5500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crazed_Summer_Vanguard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 1.3
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Crazed Winter Rearguard",
    "hp": 5200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crazed_Winter_Rearguard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Crazed Winter Vanguard",
    "hp": 5800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crazed_Winter_Vanguard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1.3
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Cream Blob",
    "hp": 76,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cream_Blob.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Crimson Frog",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crimson_Frog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Crocodile",
    "hp": 105,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crocodile.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Crultor",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crultor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": -1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Crusader",
    "hp": 3400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crusader.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Crustacea Gigantica",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crustacea_Gigantica.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Crypt Defiler",
    "hp": 185,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crypt_Defiler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Crypt Shambler",
    "hp": 330,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crypt_Shambler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Crypt Warden",
    "hp": 8300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crypt_Warden.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.75
      },
      {
        "type": "death",
        "multiplier": 1.35
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Crypt Warrior",
    "hp": 7800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crypt_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Crystal Spider",
    "hp": 1250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crystal_Spider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Crystal Wolf",
    "hp": 750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crystal_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Crystalcrusher",
    "hp": 570,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Crystalcrusher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.03
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cublarc the Plunderer",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cublarc_the_Plunderer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Cult Believer",
    "hp": 975,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cult_Believer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Cult Enforcer",
    "hp": 1150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cult_Enforcer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Cult Scholar",
    "hp": 1650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cult_Scholar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Cunning Werepanther",
    "hp": 4300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cunning_Werepanther.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.25
      }
    ]
  },
  {
    "name": "Cursed Ape",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cursed_Ape.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Cursed Book",
    "hp": 20000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cursed_Book.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cursed Gladiator",
    "hp": 435,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cursed_Gladiator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Cursed Prospector",
    "hp": 3900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cursed_Prospector.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Custodian",
    "hp": 47000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Custodian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Cyclops",
    "hp": 260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cyclops.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Cyclops Drone",
    "hp": 325,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cyclops_Drone.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Cyclops Smith",
    "hp": 435,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Cyclops_Smith.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Damage Resonance",
    "hp": 11000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Damage_Resonance.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Damaged Crystal Golem",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Damaged_Crystal_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Damaged Worker Golem",
    "hp": 260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Damaged_Worker_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Damned Soul",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Damned_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Darakan the Executioner",
    "hp": 3480,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Darakan_the_Executioner.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dark Apprentice",
    "hp": 225,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dark_Apprentice.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dark Carnisylvan",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dark_Carnisylvan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Dark Faun",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dark_Faun.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Dark Magician",
    "hp": 325,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dark_Magician.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Dark Merudri",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dark_Merudri.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dark Monk",
    "hp": 190,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dark_Monk.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dark Torturer",
    "hp": 7350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dark_Torturer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Darkfang",
    "hp": 4800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Darkfang.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Darklight Construct",
    "hp": 32200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Darklight_Construct.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.15
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Darklight Emitter",
    "hp": 27500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Darklight_Emitter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.15
      },
      {
        "type": "holy",
        "multiplier": 0.75
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Darklight Matter",
    "hp": 30150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Darklight_Matter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Darklight Source",
    "hp": 31550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Darklight_Source.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Darklight Striker",
    "hp": 29700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Darklight_Striker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.65
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Dawn Bat",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dawn_Bat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Dawn Scorpion",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dawn_Scorpion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dawnfire Asura",
    "hp": 2900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dawnfire_Asura.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dawnfly",
    "hp": 90,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dawnfly.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dazed Leaf Golem",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dazed_Leaf_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Deadeye Devious",
    "hp": 1450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deadeye_Devious.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Death Blob",
    "hp": 320,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Death_Blob.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Death Dragon",
    "hp": 8350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Death_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Death Priest",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Death_Priest.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Death Priest Shargon",
    "hp": 65000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Death_Priest_Shargon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.97
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Deathbine",
    "hp": 525,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deathbine.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.65
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Deathbringer",
    "hp": 8440,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deathbringer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Deathling Scout",
    "hp": 7200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deathling_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deathling Spellsinger",
    "hp": 7200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deathling_Spellsinger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deathslicer",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deathslicer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Deathspawn",
    "hp": 225,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deathspawn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Deathstrike",
    "hp": 200000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deathstrike.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Deep Terror",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deep_Terror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Deepling Brawler",
    "hp": 380,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Brawler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepling Elite",
    "hp": 3200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Elite.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepling Guard",
    "hp": 1900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Guard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepling Master Librarian",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Master_Librarian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepling Scout",
    "hp": 240,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepling Spellsinger",
    "hp": 850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Spellsinger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepling Tyrant",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Tyrant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepling Warrior",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepling Worker",
    "hp": 190,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepling_Worker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Deepsea Blood Crab",
    "hp": 320,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepsea_Blood_Crab.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Deepworm",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deepworm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Deer",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Deer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Defiler",
    "hp": 3650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Defiler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Delany (Creature)",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Delany_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Demodras",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Demodras.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Demon",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Demon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1.12
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.12
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Demon (Goblin)",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Demon_(Goblin).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Demon Outcast",
    "hp": 6900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Demon_Outcast.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1.06
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.08
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Demon Parrot",
    "hp": 360,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Demon_Parrot.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Demon Skeleton",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Demon_Skeleton.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Denson Larika (Creature)",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Denson_Larika_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Depowered Minotaur",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Depowered_Minotaur.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Despair",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Despair.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Desperate White Deer",
    "hp": 55,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Desperate_White_Deer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Despor",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Despor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Destroyer",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Destroyer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.03
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Devourer",
    "hp": 1900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Devourer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Devovorga",
    "hp": 500000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Devovorga.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dharalion",
    "hp": 390,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dharalion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Diabolic Imp",
    "hp": 1950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Diabolic_Imp.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Diamond Servant",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Diamond_Servant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "Diamond Servant Replica",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Diamond_Servant_Replica.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "Diblis the Fair",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Diblis_the_Fair.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.6
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dipthrah",
    "hp": 4200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dipthrah.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Dire Penguin",
    "hp": 173,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dire_Penguin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Diremaw",
    "hp": 3600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Diremaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Dirtbeard",
    "hp": 630,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dirtbeard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Diseased Bill",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Diseased_Bill.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.75
      },
      {
        "type": "death",
        "multiplier": 0.25
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Diseased Dan",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Diseased_Dan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Diseased Fred",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Diseased_Fred.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Disruption",
    "hp": 12000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Disruption.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Distorted Phantom",
    "hp": 26000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Distorted_Phantom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Doctor Perhaps",
    "hp": 475,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Doctor_Perhaps.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Dog",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Domestikion",
    "hp": 750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Domestikion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Doom Deer",
    "hp": 405,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Doom_Deer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Doomhowl",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Doomhowl.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Doomsday Cultist",
    "hp": 125,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Doomsday_Cultist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Dracola",
    "hp": 16200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dracola.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dragolisk",
    "hp": 6180,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dragolisk.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Dragon",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Dragon Essence",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dragon_Essence.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dragon Hatchling",
    "hp": 380,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dragon_Hatchling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "Dragon Hoard",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dragon_Hoard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dragon Lord",
    "hp": 1900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dragon_Lord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Dragon Lord Hatchling",
    "hp": 750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dragon_Lord_Hatchling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "Dragonling",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dragonling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Draken Abomination",
    "hp": 6250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Draken_Abomination.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Draken Elite",
    "hp": 5550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Draken_Elite.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Draken Spellweaver",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Draken_Spellweaver.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Draken Warmaster",
    "hp": 4150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Draken_Warmaster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Draptor",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Draptor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.2
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Drasilla",
    "hp": 1260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Drasilla.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Dread Intruder",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dread_Intruder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dread Minion",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dread_Minion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dreadbeast",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dreadbeast.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.5
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dreadful Disruptor",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dreadful_Disruptor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Dreadmaw",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dreadmaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Dreadwing",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dreadwing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Drillworm",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Drillworm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.84
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dromedary",
    "hp": 45,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dromedary.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Drowned Deck Hand",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Drowned_Deck_Hand.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Druid Familiar",
    "hp": 20000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Druid_Familiar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Druid's Apparition",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Druid's_Apparition.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.2
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Drume",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Drume.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.65
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dryad",
    "hp": 310,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dryad.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Duke Krule",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Duke_Krule.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -0.6000000000000001
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Duskbringer",
    "hp": 3550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Duskbringer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Dwarf",
    "hp": 90,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dwarf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Dwarf Geomancer",
    "hp": 380,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dwarf_Geomancer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.4
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Dwarf Guard",
    "hp": 245,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dwarf_Guard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Dwarf Henchman",
    "hp": 350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dwarf_Henchman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dwarf Miner",
    "hp": 120,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dwarf_Miner.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Dwarf Soldier",
    "hp": 135,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dwarf_Soldier.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Dworc Fleshhunter",
    "hp": 85,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dworc_Fleshhunter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.13
      },
      {
        "type": "fire",
        "multiplier": 1.08
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dworc Shadowstalker",
    "hp": 8900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dworc_Shadowstalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Dworc Venomsniper",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dworc_Venomsniper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 1.08
      },
      {
        "type": "fire",
        "multiplier": 1.13
      },
      {
        "type": "ice",
        "multiplier": 1.13
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Dworc Voodoomaster",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Dworc_Voodoomaster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.65
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Earth Elemental",
    "hp": 650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Earth_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.65
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Earth Overlord",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Earth_Overlord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Earworm",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Earworm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Eclipse Knight",
    "hp": 45000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Eclipse_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Efreet",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Efreet.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.08
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.4
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Egg (Creature)",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Egg_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ekatrix",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ekatrix.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Elder Bloodjaw",
    "hp": 86000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elder_Bloodjaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Elder Bonelord",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elder_Bonelord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Elder Forest Fury",
    "hp": 670,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elder_Forest_Fury.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Elder Mummy",
    "hp": 850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elder_Mummy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Elder Wyrm",
    "hp": 2700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elder_Wyrm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "Elephant",
    "hp": 320,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elephant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Elf",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Elf Arcanist",
    "hp": 220,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elf_Arcanist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Elf Overseer",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elf_Overseer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Elf Scout",
    "hp": 160,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elf_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Elvira Hammerthrust",
    "hp": 245,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Elvira_Hammerthrust.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Emerald Damselfly",
    "hp": 90,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Emerald_Damselfly.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Emerald Tortoise",
    "hp": 22300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Emerald_Tortoise.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Empowered Glooth Horror",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Empowered_Glooth_Horror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Energetic Book",
    "hp": 18500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Energetic_Book.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Energized Raging Mage",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Energized_Raging_Mage.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.5
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Energuardian of Tales",
    "hp": 14000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Energuardian_of_Tales.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.12
      }
    ]
  },
  {
    "name": "Energy Elemental",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Energy_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.65
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Energy Overlord",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Energy_Overlord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Enfeebled Silencer",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enfeebled_Silencer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0.35
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Enlightened of the Cult",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enlightened_of_the_Cult.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Enpa Yolo",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enpa_Yolo.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Enraged Bookworm",
    "hp": 145,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enraged_Bookworm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Enraged Crystal Golem",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enraged_Crystal_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Enraged Morshabaal",
    "hp": 1000000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enraged_Morshabaal.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Enraged Sand Brood",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enraged_Sand_Brood.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Enraged Soul",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enraged_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Enraged Squirrel",
    "hp": 35,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enraged_Squirrel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Enraged White Deer",
    "hp": 255,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enraged_White_Deer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Enslaved Dwarf",
    "hp": 3800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enslaved_Dwarf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.03
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Enthralled Demon",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enthralled_Demon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.12
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.12
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Enusat the Onyx Wing",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Enusat_the_Onyx_Wing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Eradicator",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Eradicator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Eruption of Destruction",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Eruption_of_Destruction.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Esmeralda",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Esmeralda.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Essence of Darkness",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Essence_of_Darkness.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.020000000000000018
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Essence of Malice",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Essence_of_Malice.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.5
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.5
      },
      {
        "type": "earth",
        "multiplier": 1.5
      }
    ]
  },
  {
    "name": "Eternal Guardian",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Eternal_Guardian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ethershreck",
    "hp": 9500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ethershreck.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Evil Mastermind",
    "hp": 1295,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Evil_Mastermind.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Evil Prospector",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Evil_Prospector.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.35
      },
      {
        "type": "holy",
        "multiplier": 0.65
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Evil Sheep",
    "hp": 350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Evil_Sheep.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Evil Sheep Lord",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Evil_Sheep_Lord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Execowtioner",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Execowtioner.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Exotic Bat",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Exotic_Bat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "Exotic Cave Spider",
    "hp": 1900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Exotic_Cave_Spider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Eye of the Seven",
    "hp": 120,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Eye_of_the_Seven.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Eyeless Devourer",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Eyeless_Devourer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Faceless Bane",
    "hp": 17000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Faceless_Bane.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fahim the Wise",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fahim_the_Wise.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.99
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Falcon Knight",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Falcon_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Falcon Paladin",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Falcon_Paladin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fallen Challenger",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fallen_Challenger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fallen Mooh'Tah Master Ghar",
    "hp": 7990,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fallen_Mooh'Tah_Master_Ghar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.4
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fat Porker",
    "hp": 20000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fat_Porker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fatality",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fatality.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Faun",
    "hp": 900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Faun.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Fazzrah",
    "hp": 2955,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fazzrah.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Feeble Glooth Horror",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Feeble_Glooth_Horror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Feral Sphinx",
    "hp": 9800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Feral_Sphinx.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Feral Werecrocodile",
    "hp": 6400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Feral_Werecrocodile.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.4
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Fernfang",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fernfang.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Feroxa (Killable Werewolf)",
    "hp": 150000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Feroxa_(Killable_Werewolf).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.08
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ferumbras",
    "hp": 90000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ferumbras.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Ferumbras Mortal Shell",
    "hp": 300000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ferumbras_Mortal_Shell.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.35
      },
      {
        "type": "death",
        "multiplier": 0.35
      },
      {
        "type": "fire",
        "multiplier": 0.35
      },
      {
        "type": "ice",
        "multiplier": 0.35
      },
      {
        "type": "energy",
        "multiplier": 0.35
      },
      {
        "type": "earth",
        "multiplier": 0.35
      }
    ]
  },
  {
    "name": "Ferumbras Soul Splinter",
    "hp": 90000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ferumbras_Soul_Splinter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.75
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fetter",
    "hp": 5500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fetter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.65
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Feverish Citizen",
    "hp": 125,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Feverish_Citizen.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.15
      },
      {
        "type": "holy",
        "multiplier": 0.25
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Feversleep",
    "hp": 5900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Feversleep.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Fiery Blood",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fiery_Blood.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fiery Heart (Creature)",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fiery_Heart_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Filth Toad",
    "hp": 185,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Filth_Toad.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Fire Devil",
    "hp": 200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fire_Devil.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Fire Elemental",
    "hp": 280,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fire_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fire Overlord",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fire_Overlord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Firestarter",
    "hp": 180,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Firestarter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Fish (Creature)",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fish_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Flame of Omrafir",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Flame_of_Omrafir.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Flameborn",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Flameborn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Flamecaller Zazrak",
    "hp": 2690,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Flamecaller_Zazrak.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Flamethrower",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Flamethrower.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Flamingo",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Flamingo.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fleabringer",
    "hp": 265,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fleabringer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fleshcrawler",
    "hp": 1450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fleshcrawler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fleshslicer",
    "hp": 5700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fleshslicer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Flimsy Lost Soul",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Flimsy_Lost_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Floating Savant",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Floating_Savant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Flying Book",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Flying_Book.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Foam Stalker",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Foam_Stalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.3
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Foreman Kneebiter",
    "hp": 570,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Foreman_Kneebiter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Foreshock",
    "hp": 105000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Foreshock.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Forest Fury",
    "hp": 480,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Forest_Fury.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fox",
    "hp": 22,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fox.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Frazzlemaw",
    "hp": 4100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frazzlemaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Freakish Lost Soul",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Freakish_Lost_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 1.4
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.65
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Frenzied Plant Thing",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frenzied_Plant_Thing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.55
      },
      {
        "type": "holy",
        "multiplier": 0.55
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 0.55
      },
      {
        "type": "ice",
        "multiplier": 0.55
      },
      {
        "type": "energy",
        "multiplier": 0.55
      },
      {
        "type": "earth",
        "multiplier": 0.55
      }
    ]
  },
  {
    "name": "Frenzy",
    "hp": 8210,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frenzy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Frost Dragon",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frost_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Frost Dragon Hatchling",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frost_Dragon_Hatchling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Frost Flower Asura",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frost_Flower_Asura.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Frost Giant",
    "hp": 270,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frost_Giant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Frost Giantess",
    "hp": 275,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frost_Giantess.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.03
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Frost Servant",
    "hp": 385,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frost_Servant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Frost Spider",
    "hp": 1250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frost_Spider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Frost Troll",
    "hp": 55,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frost_Troll.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Frostfur",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Frostfur.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Fruit Drop",
    "hp": 63,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fruit_Drop.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Fugue",
    "hp": 32000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fugue.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fungosaurus",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fungosaurus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Furious Fire Elemental",
    "hp": 280,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Furious_Fire_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Furious Morshabaal",
    "hp": 1000000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Furious_Morshabaal.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Furious Scorpion",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Furious_Scorpion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Furious Troll",
    "hp": 245,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Furious_Troll.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Fury",
    "hp": 4100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fury.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Fury of the Emperor",
    "hp": 51000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Fury_of_the_Emperor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Furyosa",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Furyosa.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gaffir",
    "hp": 48500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gaffir.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Gang Member",
    "hp": 295,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gang_Member.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gargoyle",
    "hp": 250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gargoyle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Gaz'haragoth",
    "hp": 350000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gaz'haragoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Gazer",
    "hp": 120,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gazer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Gazer Spectre",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gazer_Spectre.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "ice",
        "multiplier": 1.3
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gelidrazah the Frozen",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gelidrazah_the_Frozen.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "General Murius",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/General_Murius.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ghastly Dragon",
    "hp": 7800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ghastly_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ghazbaran",
    "hp": 77000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ghazbaran.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ghost",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ghost.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ghost of a Planegazer",
    "hp": 1450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ghost_of_a_Planegazer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ghost Wolf",
    "hp": 160,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ghost_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.65
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Ghostly Apparition",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ghostly_Apparition.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ghoul",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ghoul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Ghoulish Hyaena",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ghoulish_Hyaena.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Giant Spider",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Giant Spider (Nostalgia)",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider_(Nostalgia).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Giant Spider (Wyda)",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider_(Wyda).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Giant Spider 7.4",
    "hp": 3250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider_7.4.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Giant Spider Brood 7.4",
    "hp": 1050,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider_Brood_7.4.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Giant Spider Brood 7.6",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider_Brood_7.6.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Giant Spider Brood 8.1",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider_Brood_8.1.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Giant Spider Drone 7.4",
    "hp": 1150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider_Drone_7.4.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Giant Spider Hatchling 7.4",
    "hp": 950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Giant_Spider_Hatchling_7.4.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gingerbread Man",
    "hp": 85,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gingerbread_Man.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Girtablilu Warrior",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Girtablilu_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Gladiator",
    "hp": 185,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gladiator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Glitterscale",
    "hp": 1111,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glitterscale.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Gloom Maw",
    "hp": 8700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gloom_Maw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Gloom Wolf",
    "hp": 200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gloom_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Gloombringer",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gloombringer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Glooth Anemone",
    "hp": 2400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Anemone.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Glooth Bandit",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Bandit.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Glooth Battery",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Battery.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.75
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "Glooth Blob",
    "hp": 750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Blob.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Glooth Bomb",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Bomb.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "holy",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "death",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "fire",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "ice",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "energy",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "earth",
        "multiplier": 0.15000000000000002
      }
    ]
  },
  {
    "name": "Glooth Brigand",
    "hp": 2400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Brigand.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Glooth Fairy",
    "hp": 59000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Fairy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Glooth Golem",
    "hp": 2700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Glooth Horror",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth_Horror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Glooth-Generator",
    "hp": 12000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Glooth-Generator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gnarlhound",
    "hp": 198,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gnarlhound.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gnomevil",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gnomevil.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.73
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Gnorre Chyllson",
    "hp": 7150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gnorre_Chyllson.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.01
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Goblin",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Goblin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Goblin Assassin",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Goblin_Assassin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Goblin Leader",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Goblin_Leader.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Goblin Scavenger",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Goblin_Scavenger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Goggle Cake",
    "hp": 2700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Goggle_Cake.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Golden Servant",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Golden_Servant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Golden Servant Replica",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Golden_Servant_Replica.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Goldhanded Cultist",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Goldhanded_Cultist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.83
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Goldhanded Cultist Bride",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Goldhanded_Cultist_Bride.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.83
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Golgordan",
    "hp": 40000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Golgordan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Gore Horn",
    "hp": 20620,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gore_Horn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gorerilla",
    "hp": 16850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gorerilla.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gorga",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gorga.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Gorger Inferniarch",
    "hp": 9450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gorger_Inferniarch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gorgo",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gorgo.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Gozzler",
    "hp": 240,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gozzler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gralvalon",
    "hp": 33000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gralvalon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Grand Canon Dominus",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grand_Canon_Dominus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Grand Chaplain Gaunder",
    "hp": 18000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grand_Chaplain_Gaunder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Grand Commander Soeren",
    "hp": 17000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grand_Commander_Soeren.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Grand Master Oberon",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grand_Master_Oberon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Grand Mother Foulscale",
    "hp": 1850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grand_Mother_Foulscale.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Grandfather Tridian",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grandfather_Tridian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.65
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Grave Guard",
    "hp": 720,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grave_Guard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Grave Robber",
    "hp": 165,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grave_Robber.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gravedigger",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gravedigger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Gravelord Oshuran",
    "hp": 3100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gravelord_Oshuran.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.65
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Great Timedisplaced Anomaly",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Great_Timedisplaced_Anomaly.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Greater Canopic Jar",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Greater_Canopic_Jar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Greater Death Minion",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Greater_Death_Minion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Greater Energy Elemental",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Greater_Energy_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Greater Fire Elemental",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Greater_Fire_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Greedok",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Greedok.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Green Djinn",
    "hp": 330,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Green_Djinn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.13
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Green Frog",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Green_Frog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Grim Reaper",
    "hp": 3900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grim_Reaper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.35
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Grimeleech",
    "hp": 9500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grimeleech.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.4
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Grimgor Guteater",
    "hp": 1155,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grimgor_Guteater.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Grims Little Hamster",
    "hp": 5500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grims_Little_Hamster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Groam",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Groam.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Grorlam",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grorlam.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Grove Guardian",
    "hp": 20000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grove_Guardian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Grynch Clan Goblin",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Grynch_Clan_Goblin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Gryphon",
    "hp": 3200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Gryphon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Guard Captain Quaid",
    "hp": 55000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Guard_Captain_Quaid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Guardian Golem",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Guardian_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Guardian of Tales",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Guardian_of_Tales.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.12
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Guzzlemaw",
    "hp": 6400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Guzzlemaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Hairman the Huge",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hairman_the_Huge.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Hand of Cursed Fate",
    "hp": 6600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hand_of_Cursed_Fate.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Harbinger of Darkness",
    "hp": 120000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Harbinger_of_Darkness.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hardened Usurper Archer",
    "hp": 7300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hardened_Usurper_Archer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hardened Usurper Knight",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hardened_Usurper_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hardened Usurper Warlock",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hardened_Usurper_Warlock.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Harpy",
    "hp": 7700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Harpy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Hatebreeder",
    "hp": 18000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hatebreeder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Haunted Dragon",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Haunted_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.4
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Haunted Treeling",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Haunted_Treeling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Haunter",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Haunter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hawk Hopper",
    "hp": 2180,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hawk_Hopper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Hazardous Phantom",
    "hp": 70000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hazardous_Phantom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Headpecker",
    "hp": 16300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Headpecker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Headwalker",
    "hp": 2460,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Headwalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Hell Hole",
    "hp": 120,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hell_Hole.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Hellfire Fighter",
    "hp": 3800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hellfire_Fighter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hellflayer",
    "hp": 14000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hellflayer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Hellgorak",
    "hp": 25850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hellgorak.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.020000000000000018
      },
      {
        "type": "holy",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "death",
        "multiplier": 0.020000000000000018
      },
      {
        "type": "fire",
        "multiplier": 0.020000000000000018
      },
      {
        "type": "ice",
        "multiplier": 0.020000000000000018
      },
      {
        "type": "energy",
        "multiplier": 0.020000000000000018
      },
      {
        "type": "earth",
        "multiplier": 0.020000000000000018
      }
    ]
  },
  {
    "name": "Hellhound",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hellhound.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Hellhunter Inferniarch",
    "hp": 11300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hellhunter_Inferniarch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Hellspawn",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hellspawn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Hemming",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hemming.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Heoni",
    "hp": 900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Heoni.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Herald of Gloom",
    "hp": 340,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Herald_of_Gloom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Herd Weevil",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Herd_Weevil.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Hero",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hero.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Hibernal Moth",
    "hp": 850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hibernal_Moth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.3
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hide",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hide.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.6
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Hideous Fungus",
    "hp": 4600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hideous_Fungus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "High Templar Cobrass",
    "hp": 410,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/High_Templar_Cobrass.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "High Voltage Elemental",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/High_Voltage_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.65
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Hirintror",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hirintror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hive Overseer",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hive_Overseer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Holy Bog Frog",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Holy_Bog_Frog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Honey Elemental",
    "hp": 2560,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Honey_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Honour Guard",
    "hp": 85,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Honour_Guard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hoodinion",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hoodinion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Horadron",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Horadron.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.4
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Horestis",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Horestis.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Horse (Brown)",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Horse_(Brown).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Horse (Grey)",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Horse_(Grey).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Horse (Taupe)",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Horse_(Taupe).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hot Dog",
    "hp": 505,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hot_Dog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hulking Carnisylvan",
    "hp": 8600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hulking_Carnisylvan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Hulking Prehemoth",
    "hp": 20700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hulking_Prehemoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Human (Creature)",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Human_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Humongous Fungus",
    "hp": 3400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Humongous_Fungus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Humorless Fungus",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Humorless_Fungus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Hunter",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hunter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Husky",
    "hp": 140,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Husky.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hyaena",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hyaena.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Hydra",
    "hp": 2350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Hydra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ice Dragon",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ice_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.3
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Ice Golem",
    "hp": 385,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ice_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ice Overlord",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ice_Overlord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ice Witch",
    "hp": 650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ice_Witch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Icecold Book",
    "hp": 21000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Icecold_Book.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Iks Ahpututu",
    "hp": 1630,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Iks_Ahpututu.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Iks Aucar",
    "hp": 1520,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Iks_Aucar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Iks Chuka",
    "hp": 1240,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Iks_Chuka.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Iks Churrascan",
    "hp": 1520,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Iks_Churrascan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Iks Pututu",
    "hp": 1310,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Iks_Pututu.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Iks Yapunac",
    "hp": 3125,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Iks_Yapunac.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Imp Warden",
    "hp": 10500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Imp_Warden.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Incineron",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Incineron.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Incredibly Old Witch",
    "hp": 620,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Incredibly_Old_Witch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Infected Weeper",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Infected_Weeper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": -1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Infernal Demon",
    "hp": 32000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Infernal_Demon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Infernal Frog",
    "hp": 655,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Infernal_Frog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Infernal Phantom",
    "hp": 26000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Infernal_Phantom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 0.99
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Infernalist",
    "hp": 3650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Infernalist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.050000000000000044
      }
    ]
  },
  {
    "name": "Ink Blob",
    "hp": 9500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ink_Blob.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.08
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ink Splash",
    "hp": 1950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ink_Splash.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Inkwing",
    "hp": 12000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Inkwing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Inky",
    "hp": 750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Inky.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Insane Siren",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Insane_Siren.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.75
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Insect Swarm",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Insect_Swarm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Insectoid Scout",
    "hp": 230,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Insectoid_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Insectoid Worker",
    "hp": 950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Insectoid_Worker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Instable Breach Brood",
    "hp": 2200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Instable_Breach_Brood.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.25
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Instable Fire",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Instable_Fire.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Instable Sparkion",
    "hp": 1900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Instable_Sparkion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.4
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Irahsae",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Irahsae.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Irgix the Flimsy",
    "hp": 24000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Irgix_the_Flimsy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Iron Servant",
    "hp": 350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Iron_Servant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Iron Servant Replica",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Iron_Servant_Replica.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Ironblight",
    "hp": 6600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ironblight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 0.4
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Island Troll",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Island_Troll.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Jagged Earth Elemental",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Jagged_Earth_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Jailer",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Jailer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Jaul",
    "hp": 90000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Jaul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0.99
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Jellyfish",
    "hp": 55,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Jellyfish.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Jesse the Wicked",
    "hp": 280,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Jesse_the_Wicked.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Juggernaut",
    "hp": 18000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Juggernaut.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Jungle Moa",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Jungle_Moa.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Juvenile Bashmu",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Juvenile_Bashmu.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Juvenile Cyclops",
    "hp": 260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Juvenile_Cyclops.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Kalyassa",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Kalyassa.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Katex Blood Tongue",
    "hp": 6300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Katex_Blood_Tongue.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Kerberos",
    "hp": 11000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Kerberos.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Killer Caiman",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Killer_Caiman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Killer Rabbit",
    "hp": 205,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Killer_Rabbit.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "King Zelos",
    "hp": 480000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/King_Zelos.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Knight Familiar",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Knight_Familiar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Knight's Apparition",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Knight's_Apparition.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Knowledge Elemental",
    "hp": 10500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Knowledge_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Kollos",
    "hp": 3800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Kollos.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.07
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Kongra",
    "hp": 340,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Kongra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Koshei the Deathless",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Koshei_the_Deathless.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Kraknaknork",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Kraknaknork.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Kreebosh the Exile",
    "hp": 705,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Kreebosh_the_Exile.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Kroazur",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Kroazur.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Kusuma",
    "hp": 7650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Kusuma.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lab Assistant",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lab_Assistant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Lacewing Moth",
    "hp": 900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lacewing_Moth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lady Tenebris",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lady_Tenebris.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 0.4
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Ladybug",
    "hp": 255,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ladybug.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Lamassu",
    "hp": 8700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lamassu.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Lancer Beetle",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lancer_Beetle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Larva",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Larva.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Last Planegazer",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Last_Planegazer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.55
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Latrivan",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Latrivan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Lava Golem",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lava_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lava Lurker",
    "hp": 5900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lava_Lurker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": -1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lava Puddle (Creature)",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lava_Puddle_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lavafungus",
    "hp": 7200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lavafungus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lavaworm",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lavaworm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Leaf Golem",
    "hp": 90,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Leaf_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Leiden",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Leiden.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": -1
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": -1
      },
      {
        "type": "ice",
        "multiplier": -1
      },
      {
        "type": "energy",
        "multiplier": -1
      },
      {
        "type": "earth",
        "multiplier": -1
      }
    ]
  },
  {
    "name": "Lersatio",
    "hp": 1645,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lersatio.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lesser Death Minion",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lesser_Death_Minion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lesser Fire Devil",
    "hp": 175,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lesser_Fire_Devil.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lesser Magma Crystal",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lesser_Magma_Crystal.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lesser Swarmer",
    "hp": 230,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lesser_Swarmer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lethal Lissy",
    "hp": 1450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lethal_Lissy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Leviathan",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Leviathan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.15
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Librarian",
    "hp": 11000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Librarian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lich",
    "hp": 880,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lich.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Liodile",
    "hp": 8600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Liodile.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Lion",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.08
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Lion Archer",
    "hp": 7300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lion_Archer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lion Commander",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lion_Commander.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lion Hydra",
    "hp": 2760,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lion_Hydra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Lion Knight",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lion_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lion Warlock",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lion_Warlock.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lionet (Creature)",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lionet_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lisa",
    "hp": 55000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lisa.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.03
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Little Corym Charlatan",
    "hp": 90,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Little_Corym_Charlatan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lizard Abomination",
    "hp": 95000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Abomination.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Chosen",
    "hp": 3050,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Chosen.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Dragon Priest",
    "hp": 1450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Dragon_Priest.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Gate Guardian",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Gate_Guardian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard High Guard",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_High_Guard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.55
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Legionnaire",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Legionnaire.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.55
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Magistratus",
    "hp": 6250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Magistratus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Noble",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Noble.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Sentinel",
    "hp": 265,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Sentinel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Snakecharmer",
    "hp": 325,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Snakecharmer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Templar",
    "hp": 410,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Templar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lizard Zaogun",
    "hp": 2955,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lizard_Zaogun.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.55
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lord of the Elements",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lord_of_the_Elements.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.55
      }
    ]
  },
  {
    "name": "Lord Retro",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lord_Retro.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Loricate Orger",
    "hp": 750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Loricate_Orger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Lost Basher",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lost_Basher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lost Berserker",
    "hp": 5900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lost_Berserker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lost Exile",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lost_Exile.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lost Gnome",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lost_Gnome.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lost Husher",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lost_Husher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lost Soul",
    "hp": 5800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lost_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lost Thrower",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lost_Thrower.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Lost Time",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lost_Time.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lucifuga Aranea",
    "hp": 12000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lucifuga_Aranea.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lumbering Carnivor",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lumbering_Carnivor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.4
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Lyxoph (Creature)",
    "hp": 45000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Lyxoph_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mad Mage",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mad_Mage.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.2
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mad Scientist",
    "hp": 325,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mad_Scientist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Mad Sheep",
    "hp": 22,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mad_Sheep.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "Mad Technomancer",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mad_Technomancer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Madareth",
    "hp": 75000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Madareth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 0.010000000000000009
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Magicthrower",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Magicthrower.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Magma Bubble",
    "hp": 150000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Magma_Bubble.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Magma Crawler",
    "hp": 4800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Magma_Crawler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Magma Crystal",
    "hp": 22000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Magma_Crystal.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Magma Fiend",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Magma_Fiend.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Magmaoid",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Magmaoid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Magnor Mournbringer",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Magnor_Mournbringer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": -1
      }
    ]
  },
  {
    "name": "Mahatheb",
    "hp": 650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mahatheb.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mahrdis",
    "hp": 3900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mahrdis.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Major Timedisplaced Anomaly (Fiehonja)",
    "hp": 75000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Major_Timedisplaced_Anomaly_(Fiehonja).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Major Timedisplaced Anomaly (Issavi)",
    "hp": 70000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Major_Timedisplaced_Anomaly_(Issavi).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Major Timedisplaced Anomaly (Rascacoon)",
    "hp": 65000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Major_Timedisplaced_Anomaly_(Rascacoon).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Makara",
    "hp": 5050,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Makara.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Makeshift Home",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Makeshift_Home.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.4
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Malicious Minion",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Malicious_Minion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Maliz",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Maliz.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": -10
      }
    ]
  },
  {
    "name": "Malofur Mangrinder",
    "hp": 320000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Malofur_Mangrinder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": -1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Malvaroth",
    "hp": 40000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Malvaroth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mamma Longlegs",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mamma_Longlegs.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mammoth",
    "hp": 320,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mammoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Man in the Cave",
    "hp": 485,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Man_in_the_Cave.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Manta Ray",
    "hp": 680,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Manta_Ray.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Manticore",
    "hp": 6700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Manticore.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mantosaurus",
    "hp": 19400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mantosaurus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Many Faces",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Many_Faces.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1.3
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Marid",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Marid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.08
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.4
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Marsh Stalker",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Marsh_Stalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Marziel",
    "hp": 1900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Marziel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5700000000000001
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Massacre",
    "hp": 32000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Massacre.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.01
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "Massive Earth Elemental",
    "hp": 1330,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Massive_Earth_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Massive Energy Elemental",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Massive_Energy_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Massive Fire Elemental",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Massive_Fire_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Massive Water Elemental",
    "hp": 1250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Massive_Water_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.6
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Maw",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Maw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mawhawk",
    "hp": 45000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mawhawk.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Maxxenius",
    "hp": 320000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Maxxenius.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": -6
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mazoran",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mazoran.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Meadow Strider",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Meadow_Strider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mean Lost Soul",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mean_Lost_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "holy",
        "multiplier": 1.3
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Mean Termite",
    "hp": 4300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mean_Termite.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Meandering Mushroom",
    "hp": 29100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Meandering_Mushroom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Mearidion",
    "hp": 850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mearidion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mechanical Fighter",
    "hp": 420,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mechanical_Fighter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Medusa",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Medusa.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mega Dragon",
    "hp": 7920,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mega_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Megasylvan Sapling (Creature)",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Megasylvan_Sapling_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Megasylvan Yselda",
    "hp": 32000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Megasylvan_Yselda.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "fire",
        "multiplier": 0.4
      },
      {
        "type": "ice",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Memory of a Banshee",
    "hp": 3600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Banshee.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Memory of a Book",
    "hp": 3670,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Book.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Memory of a Carnisylvan",
    "hp": 3800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Carnisylvan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Memory of a Dwarf",
    "hp": 3730,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Dwarf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Faun",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Faun.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Frazzlemaw",
    "hp": 3770,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Frazzlemaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Fungus",
    "hp": 3580,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Fungus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Golem",
    "hp": 3660,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Hero",
    "hp": 3850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Hero.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Hydra",
    "hp": 3550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Hydra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Memory of a Lizard",
    "hp": 3520,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Lizard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Mammoth",
    "hp": 3850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Mammoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Manticore",
    "hp": 3730,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Manticore.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Pirate",
    "hp": 3750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Pirate.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Scarab",
    "hp": 3620,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Scarab.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Memory of a Shaper",
    "hp": 3710,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Shaper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Vampire",
    "hp": 3650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Vampire.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Werelion",
    "hp": 3880,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Werelion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Memory of a Wolf",
    "hp": 3640,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of a Yalahari",
    "hp": 3540,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_a_Yalahari.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Memory of an Amazon",
    "hp": 3600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_an_Amazon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of an Elf",
    "hp": 3440,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_an_Elf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of an Insectoid",
    "hp": 3630,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_an_Insectoid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Memory of an Ogre",
    "hp": 3570,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Memory_of_an_Ogre.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Menace",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Menace.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Menacing Carnivor",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Menacing_Carnivor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mental-Nexus",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mental-Nexus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mephiles",
    "hp": 415,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mephiles.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Mercurial Menace",
    "hp": 18500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mercurial_Menace.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Mercury Blob",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mercury_Blob.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.35
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.35
      }
    ]
  },
  {
    "name": "Merikh the Slaughterer",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Merikh_the_Slaughterer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 0.99
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Merlkin",
    "hp": 235,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Merlkin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Metal Gargoyle",
    "hp": 2100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Metal_Gargoyle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Midnight Asura",
    "hp": 3100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Midnight_Asura.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Midnight Panther",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Midnight_Panther.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Midnight Spawn",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Midnight_Spawn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Midnight Warrior",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Midnight_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mimic",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mimic.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mindmasher",
    "hp": 9500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mindmasher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Minion of Gaz'haragoth",
    "hp": 5500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minion_of_Gaz'haragoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 2
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minion of Versperoth",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minion_of_Versperoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Minor Timedisplaced Anomaly (Ankrahmun)",
    "hp": 48000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minor_Timedisplaced_Anomaly_(Ankrahmun).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minor Timedisplaced Anomaly (Greenshore)",
    "hp": 44000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minor_Timedisplaced_Anomaly_(Greenshore).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minor Timedisplaced Anomaly (Rookgaard)",
    "hp": 40000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minor_Timedisplaced_Anomaly_(Rookgaard).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Amazon",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Amazon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Archer",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Archer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Bruiser",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Bruiser.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Cult Follower",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Cult_Follower.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Cult Prophet",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Cult_Prophet.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Minotaur Cult Zealot",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Cult_Zealot.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Guard",
    "hp": 185,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Guard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Hunter",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Hunter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Idol",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Idol.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Invader",
    "hp": 1850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Invader.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Mage",
    "hp": 155,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Mage.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Minotaur Occultist",
    "hp": 125,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Occultist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Minotaur Poacher",
    "hp": 160,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Poacher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Minotaur Totem",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Minotaur_Totem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mint Drop",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mint_Drop.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mirade (Creature)",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mirade_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mirror Image",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mirror_Image.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Misguided Bully",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Misguided_Bully.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.3
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Misguided Shadow",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Misguided_Shadow.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Misguided Thief",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Misguided_Thief.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.3
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Mitmah Scout",
    "hp": 3940,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mitmah_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Mitmah Seer",
    "hp": 4620,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mitmah_Seer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Mitmah Vanguard",
    "hp": 65000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mitmah_Vanguard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Modified Gnarlhound",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Modified_Gnarlhound.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mole",
    "hp": 200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mole.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Monk (Creature)",
    "hp": 240,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Monk_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Monk of the Order",
    "hp": 240,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Monk_of_the_Order.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.01
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Monk's Apparition",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Monk's_Apparition.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Monstor",
    "hp": 960,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Monstor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.03
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.07
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Mooh'Tah Warrior",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mooh'Tah_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Moohtant",
    "hp": 3200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Moohtant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Moohtant Wallbreaker",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Moohtant_Wallbreaker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "holy",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "energy",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Morgaroth",
    "hp": 55000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Morgaroth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Morguthis",
    "hp": 4800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Morguthis.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Morik the Gladiator",
    "hp": 1235,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Morik_the_Gladiator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Mornenion",
    "hp": 190,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mornenion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Morshabaal",
    "hp": 1000000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Morshabaal.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mould Phantom",
    "hp": 28000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mould_Phantom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Mountain Troll",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mountain_Troll.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.15
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Mozradek",
    "hp": 28000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mozradek.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.3
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mr. Punish",
    "hp": 22000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mr._Punish.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Muddy Earth Elemental",
    "hp": 650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Muddy_Earth_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Muglex Clan Assassin",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Muglex_Clan_Assassin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Muglex Clan Footman",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Muglex_Clan_Footman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Muglex Clan Scavenger",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Muglex_Clan_Scavenger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mummy",
    "hp": 240,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mummy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Munster",
    "hp": 58,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Munster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Murderous Ghost",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Murderous_Ghost.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Murmillion",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Murmillion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Muse of Penciljack",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Muse_of_Penciljack.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Museum Stone Golem",
    "hp": 270,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Museum_Stone_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Museum Stone Rhino",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Museum_Stone_Rhino.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mushroom",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mushroom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Mushroom Sniffer",
    "hp": 250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mushroom_Sniffer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "holy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "death",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Mutated Bat",
    "hp": 900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mutated_Bat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mutated Human",
    "hp": 240,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mutated_Human.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mutated Rat",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mutated_Rat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mutated Tiger",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mutated_Tiger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Mutated Zalamon",
    "hp": 155000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mutated_Zalamon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Mycobiontic Beetle",
    "hp": 30200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Mycobiontic_Beetle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Naga Archer",
    "hp": 4640,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Naga_Archer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Naga Warrior",
    "hp": 5530,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Naga_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Nargol the Impaler",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nargol_the_Impaler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Necromancer",
    "hp": 580,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Necromancer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Necromancer Servant",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Necromancer_Servant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Necropharus",
    "hp": 750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Necropharus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Neferi The Spy",
    "hp": 28000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Neferi_The_Spy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Neutral Deepling Warrior",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Neutral_Deepling_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Nibblemaw",
    "hp": 2900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nibblemaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Nightfiend",
    "hp": 2700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nightfiend.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.08
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Nighthunter",
    "hp": 19200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nighthunter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Nightmare",
    "hp": 2700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nightmare.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Nightmare of Gaz'haragoth",
    "hp": 5500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nightmare_of_Gaz'haragoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Nightmare Scion",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nightmare_Scion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Nightslayer",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nightslayer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Nightstalker",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nightstalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Noble Lion",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Noble_Lion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Nomad (Basic)",
    "hp": 160,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nomad_(Basic).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Nomad (Blue)",
    "hp": 160,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nomad_(Blue).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Nomad (Female)",
    "hp": 160,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nomad_(Female).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Norcferatu Heartless",
    "hp": 5700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Norcferatu_Heartless.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Norcferatu Nightweaver",
    "hp": 6100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Norcferatu_Nightweaver.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Norgle Glacierbeard",
    "hp": 4280,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Norgle_Glacierbeard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Northern Pike (Creature)",
    "hp": 95,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Northern_Pike_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Novice of the Cult",
    "hp": 285,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Novice_of_the_Cult.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.08
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.08
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Noxious Ripptor",
    "hp": 22700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Noxious_Ripptor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Nymph",
    "hp": 900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Nymph.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Obujos",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Obujos.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.4
      },
      {
        "type": "fire",
        "multiplier": 0.4
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ocyakao",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ocyakao.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ogre Brute",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ogre_Brute.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ogre Rowdy",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ogre_Rowdy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.3
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ogre Ruffian",
    "hp": 5500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ogre_Ruffian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ogre Sage",
    "hp": 4800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ogre_Sage.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.3
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Ogre Savage",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ogre_Savage.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Ogre Shaman",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ogre_Shaman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Omnivora",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Omnivora.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Omrafir",
    "hp": 322000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Omrafir.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Omruc",
    "hp": 4300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Omruc.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Oodok Witchmaster",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Oodok_Witchmaster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.65
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Oozing Carcass",
    "hp": 27500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Oozing_Carcass.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.65
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Oozing Corpus",
    "hp": 28700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Oozing_Corpus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Orc",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Berserker",
    "hp": 210,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Berserker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Cult Fanatic",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Cult_Fanatic.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Cult Inquisitor",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Cult_Inquisitor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Cult Minion",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Cult_Minion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Cult Priest",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Cult_Priest.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Cultist",
    "hp": 1350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Cultist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Leader",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Leader.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Marauder",
    "hp": 235,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Marauder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Rider",
    "hp": 180,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Rider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Shaman",
    "hp": 115,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Shaman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Spearman",
    "hp": 105,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Spearman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Warlord",
    "hp": 950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Warlord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orc Warrior",
    "hp": 125,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orc_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orchid Frog",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orchid_Frog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Orclops Bloodbreaker",
    "hp": 10300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orclops_Bloodbreaker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Orclops Doomhauler",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orclops_Doomhauler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Orclops Ravager",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orclops_Ravager.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Orcus the Cruel",
    "hp": 480,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orcus_the_Cruel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Orewalker",
    "hp": 7200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orewalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 0.35
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Orger",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Orger Treasure",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orger_Treasure.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Orshabaal",
    "hp": 22500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Orshabaal.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Outburst",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Outburst.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Overcharge",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Overcharge.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Overcharged Energy Element",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Overcharged_Energy_Element.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Owin (Creature)",
    "hp": 9600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Owin_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Paiz the Pauperizer",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Paiz_the_Pauperizer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Paladin Familiar",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Paladin_Familiar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Paladin's Apparition",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Paladin's_Apparition.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1.11
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Panda",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Panda.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Parasite",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Parasite.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Parder",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Parder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Parrot",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Parrot.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Party Skeleton",
    "hp": 40,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Party_Skeleton.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Penciljack (Creature)",
    "hp": 150000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Penciljack_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.39
      }
    ]
  },
  {
    "name": "Penguin",
    "hp": 33,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Penguin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Percht",
    "hp": 620,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Percht.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Phantasm",
    "hp": 3950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Phantasm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Phantasm (Weak)",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Phantasm_(Weak).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Phrodomo",
    "hp": 90000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Phrodomo.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.4
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Pig",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pig.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Pig (Nostalgia)",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pig_(Nostalgia).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Pigeon",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pigeon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Pillar (Zugurosh)",
    "hp": 120,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pillar_(Zugurosh).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Pillar of Dark Energy",
    "hp": 37500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pillar_of_Dark_Energy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Pillar of Healing",
    "hp": 7300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pillar_of_Healing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Piñata Dragon",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Piñata_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.3
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Pirat Bombardier",
    "hp": 2300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirat_Bombardier.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Pirat Cutthroat",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirat_Cutthroat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Pirat Mate",
    "hp": 3200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirat_Mate.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1.3
      }
    ]
  },
  {
    "name": "Pirat Scoundrel",
    "hp": 2200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirat_Scoundrel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.74
      },
      {
        "type": "earth",
        "multiplier": 1.3
      }
    ]
  },
  {
    "name": "Pirate Buccaneer",
    "hp": 425,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirate_Buccaneer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Pirate Corsair",
    "hp": 675,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirate_Corsair.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Pirate Cutthroat",
    "hp": 325,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirate_Cutthroat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Pirate Ghost",
    "hp": 275,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirate_Ghost.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Pirate Marauder",
    "hp": 210,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirate_Marauder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.03
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Pirate Skeleton",
    "hp": 190,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pirate_Skeleton.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Pixie",
    "hp": 770,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pixie.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.4
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Plagirath",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Plagirath.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Plaguesmith",
    "hp": 8250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Plaguesmith.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Plaguethrower",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Plaguethrower.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Planestrider",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Planestrider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Plant Abomination",
    "hp": 3900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Plant_Abomination.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Poacher",
    "hp": 90,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Poacher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Poison Spider",
    "hp": 26,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Poison_Spider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Poisonous Carnisylvan",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Poisonous_Carnisylvan.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Polar Bear",
    "hp": 85,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Polar_Bear.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Poodle",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Poodle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Pooka",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pooka.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Poor Soul",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Poor_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Possessed Tree",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Possessed_Tree.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Preceptor Lazare",
    "hp": 16000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Preceptor_Lazare.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Priestess",
    "hp": 390,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Priestess.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Priestess of the Wild Sun",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Priestess_of_the_Wild_Sun.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Prince Drazzak",
    "hp": 330000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Prince_Drazzak.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.65
      },
      {
        "type": "holy",
        "multiplier": 0.65
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 0.65
      },
      {
        "type": "energy",
        "multiplier": 0.65
      },
      {
        "type": "earth",
        "multiplier": 0.65
      }
    ]
  },
  {
    "name": "Professor Maxxen",
    "hp": 90000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Professor_Maxxen.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Pupated Rootthing",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pupated_Rootthing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Putrid Mummy",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Putrid_Mummy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Pythius the Rotten (Creature)",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Pythius_the_Rotten_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Quara Constrictor",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Constrictor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Constrictor Scout",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Constrictor_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Hydromancer",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Hydromancer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Hydromancer Scout",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Hydromancer_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Looter",
    "hp": 11500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Looter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Mantassin",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Mantassin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Mantassin Scout",
    "hp": 220,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Mantassin_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Pincher",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Pincher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Pincher Scout",
    "hp": 775,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Pincher_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Plunderer",
    "hp": 13500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Plunderer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Predator",
    "hp": 2200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Predator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Predator Scout",
    "hp": 890,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Predator_Scout.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Quara Raider",
    "hp": 12500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Raider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Quara Saboteur",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Quara_Saboteur.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Queen Nostalgia (2)",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Queen_Nostalgia_(2).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rabbit",
    "hp": 15,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rabbit.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rabid Wolf",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rabid_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Radicular Totem",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Radicular_Totem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rage of Mazoran",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rage_of_Mazoran.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rage Squid",
    "hp": 17000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rage_Squid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ragged Rabid Wolf",
    "hp": 120,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ragged_Rabid_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ragiaz",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ragiaz.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Raging Fire",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Raging_Fire.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Raging Mage",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Raging_Mage.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.25
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rahemos",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rahemos.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.4
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rat",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Ravenous Lava Lurker",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ravenous_Lava_Lurker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": -1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Raxias",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Raxias.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Razzagorn",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Razzagorn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Reality Reaver",
    "hp": 3900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Reality_Reaver.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Realityquake",
    "hp": 110000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Realityquake.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Redeemed Soul",
    "hp": 250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Redeemed_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Reflection of a Mage",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Reflection_of_a_Mage.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Reflection of Mawhawk",
    "hp": 45000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Reflection_of_Mawhawk.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Reflection of Obujos",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Reflection_of_Obujos.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Regenerating Mass",
    "hp": 110000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Regenerating_Mass.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rejana (Creature)",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rejana_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Renegade Knight",
    "hp": 1450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Renegade_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.65
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Renegade Orc",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Renegade_Orc.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Renegade Quara Constrictor",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Renegade_Quara_Constrictor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Renegade Quara Hydromancer",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Renegade_Quara_Hydromancer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Renegade Quara Mantassin",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Renegade_Quara_Mantassin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Renegade Quara Pincher",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Renegade_Quara_Pincher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Renegade Quara Predator",
    "hp": 3250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Renegade_Quara_Predator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Retching Horror",
    "hp": 5300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Retching_Horror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1.03
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Retros Treasure",
    "hp": 37500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Retros_Treasure.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rewar the Bloody",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rewar_the_Bloody.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rhindeer",
    "hp": 8650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rhindeer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Ribstride",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ribstride.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rift Brood",
    "hp": 2950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rift_Brood.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rift Invader",
    "hp": 6250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rift_Invader.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rift Scythe",
    "hp": 3600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rift_Scythe.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.35
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Rift Worm",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rift_Worm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.25
      }
    ]
  },
  {
    "name": "Ripper Spectre",
    "hp": 3800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ripper_Spectre.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Risen Soldier",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Risen_Soldier.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Roaring Lion",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Roaring_Lion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Roaring Water Elemental",
    "hp": 1750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Roaring_Water_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.55
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Roast Pork",
    "hp": 420,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Roast_Pork.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Robby the Reckless",
    "hp": 155,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Robby_the_Reckless.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rocko",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rocko.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rocky",
    "hp": 390,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rocky.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rogue Naga",
    "hp": 6200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rogue_Naga.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ron the Ripper",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ron_the_Ripper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rootthing Amber Shaper",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rootthing_Amber_Shaper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rootthing Bug Tracker",
    "hp": 12500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rootthing_Bug_Tracker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rootthing Nutshell",
    "hp": 13500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rootthing_Nutshell.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rorc",
    "hp": 260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rorc.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Rot Elemental",
    "hp": 850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rot_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rotspit",
    "hp": 6800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rotspit.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Rotten Golem",
    "hp": 28000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rotten_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Rotten Man-Maggot",
    "hp": 31100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rotten_Man-Maggot.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Rotten Plant Thing",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rotten_Plant_Thing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.55
      },
      {
        "type": "holy",
        "multiplier": 0.55
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 0.55
      },
      {
        "type": "ice",
        "multiplier": 0.55
      },
      {
        "type": "energy",
        "multiplier": 0.55
      },
      {
        "type": "earth",
        "multiplier": 0.55
      }
    ]
  },
  {
    "name": "Rottie the Rotworm",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rottie_the_Rotworm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rotworm",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rotworm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rotworm Queen",
    "hp": 105,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rotworm_Queen.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Rukor Zad",
    "hp": 380,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rukor_Zad.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Rupture",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rupture.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Rustheap Golem",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Rustheap_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sabretooth (Creature)",
    "hp": 17300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sabretooth_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Sacred Snake",
    "hp": 10,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sacred_Snake.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Sacred Spider",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sacred_Spider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Salamander",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Salamander.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Salamander Trainer",
    "hp": 220,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Salamander_Trainer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Sand Brood",
    "hp": 2100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sand_Brood.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sandcrawler",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sandcrawler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sandstone Scorpion",
    "hp": 900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sandstone_Scorpion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Scar Tribe Shaman",
    "hp": 115,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Scar_Tribe_Shaman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Scar Tribe Warrior",
    "hp": 125,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Scar_Tribe_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Scarab",
    "hp": 320,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Scarab.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.18
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Scarlett Etzel",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Scarlett_Etzel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Schiach",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Schiach.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Scissorion",
    "hp": 950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Scissorion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Scorn of the Emperor",
    "hp": 45000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Scorn_of_the_Emperor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Scorpion",
    "hp": 45,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Scorpion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Sea Serpent",
    "hp": 1950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sea_Serpent.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Seacrest Serpent",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Seacrest_Serpent.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Seagull",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Seagull.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Security Golem",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Security_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": -1.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Serpent Spawn",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Serpent_Spawn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Servant Golem",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Servant_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Shaburak Demon",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shaburak_Demon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.4
      },
      {
        "type": "energy",
        "multiplier": 0.4
      },
      {
        "type": "earth",
        "multiplier": 1.25
      }
    ]
  },
  {
    "name": "Shaburak Lord",
    "hp": 2100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shaburak_Lord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.35
      },
      {
        "type": "energy",
        "multiplier": 0.35
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Shaburak Prince",
    "hp": 2600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shaburak_Prince.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "energy",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Shadow Hound",
    "hp": 555,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shadow_Hound.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Shadow of Boreth",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shadow_of_Boreth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Shadow of Lersatio",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shadow_of_Lersatio.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Shadow of Marziel",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shadow_of_Marziel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Shadow Pupil",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shadow_Pupil.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Shadowpelt",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shadowpelt.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Shadowstalker",
    "hp": 6100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shadowstalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Shaper Matriarch",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shaper_Matriarch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Shard of Corruption",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shard_of_Corruption.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Shard of Magnor",
    "hp": 205000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shard_of_Magnor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": -1
      }
    ]
  },
  {
    "name": "Shardhead",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shardhead.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Shark",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shark.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Sharpclaw",
    "hp": 3300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sharpclaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Sharptooth",
    "hp": 3100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sharptooth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Sheep",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sheep.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Shell Drake",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shell_Drake.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Shimmying Butterfly",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shimmying_Butterfly.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Shiversleep",
    "hp": 4600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shiversleep.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Shock Head",
    "hp": 4200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shock_Head.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.75
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Shredderthrower",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shredderthrower.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Shrieking Cry-Stal",
    "hp": 20650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shrieking_Cry-Stal.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Shulgrax",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Shulgrax.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sibang",
    "hp": 225,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sibang.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sight of Surrender",
    "hp": 28000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sight_of_Surrender.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Silencer",
    "hp": 5400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Silencer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0.35
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Silver Rabbit",
    "hp": 15,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Silver_Rabbit.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sineater Inferniarch",
    "hp": 9150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sineater_Inferniarch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sir Leonard",
    "hp": 22000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sir_Leonard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sir Leopold",
    "hp": 18000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sir_Leopold.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sir Valorcrest",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sir_Valorcrest.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Siramal (Creature)",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Siramal_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sister Hetai",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sister_Hetai.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Skeleton",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Skeleton.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Skeleton Elite Warrior",
    "hp": 7800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Skeleton_Elite_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Skeleton Warrior",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Skeleton_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Skunk",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Skunk.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Slick Water Elemental",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Slick_Water_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.55
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Slim",
    "hp": 1025,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Slim.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Slime",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Slime.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Slippery Northern Pike",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Slippery_Northern_Pike.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Slug",
    "hp": 255,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Slug.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Smuggler",
    "hp": 130,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Smuggler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Smuggler Baron Silvertoe",
    "hp": 280,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Smuggler_Baron_Silvertoe.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Snail Slime",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Snail_Slime.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Snake",
    "hp": 15,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Snake.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Snake God Essence",
    "hp": 65000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Snake_God_Essence.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Snake Thing",
    "hp": 70000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Snake_Thing.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Solitary Frost Dragon",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Solitary_Frost_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Son of Verminor",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Son_of_Verminor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Sopping Carcass",
    "hp": 32700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sopping_Carcass.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.4
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.65
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Sopping Corpus",
    "hp": 33400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sopping_Corpus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.6
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Sorcerer Familiar",
    "hp": 20000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sorcerer_Familiar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sorcerer's Apparition",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sorcerer's_Apparition.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.2
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Soul Scourge",
    "hp": 6900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Soul_Scourge.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Soul Spark",
    "hp": 115,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Soul_Spark.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Soul Sphere",
    "hp": 15,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Soul_Sphere.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Soul-Broken Harbinger",
    "hp": 6300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Soul-Broken_Harbinger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.3
      },
      {
        "type": "ice",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Souleater",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Souleater.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spark of Destruction",
    "hp": 3900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spark_of_Destruction.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sparkion",
    "hp": 2700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sparkion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Spawn of Despair",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spawn_of_Despair.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spawn of Devovorga",
    "hp": 8900,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spawn_of_Devovorga.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spawn of the Schnitzel",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spawn_of_the_Schnitzel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spectre",
    "hp": 1350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spectre.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.08
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 1.08
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Spellreaper Inferniarch",
    "hp": 11800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spellreaper_Inferniarch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Sphinx",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sphinx.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 1.12
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spider",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spider (Nostalgia)",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spider_(Nostalgia).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spider Queen",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spider_Queen.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Spidris",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spidris.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.03
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Spidris Elite",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spidris_Elite.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1.03
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Spiky Carnivor",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spiky_Carnivor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.6
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.3
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spirit of Earth",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spirit_of_Earth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spirit of Fire",
    "hp": 2210,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spirit_of_Fire.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spirit of Water",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spirit_of_Water.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spirit Overlord",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spirit_Overlord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Spit Nettle",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spit_Nettle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Spite of the Emperor",
    "hp": 48000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spite_of_the_Emperor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Spitter",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spitter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.11
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Splasher",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Splasher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Spyrat (Facing East)",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spyrat_(Facing_East).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Spyrat (Facing North)",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spyrat_(Facing_North).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Spyrat (Facing South)",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spyrat_(Facing_South).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Spyrat (Facing West)",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Spyrat_(Facing_West).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Squid Warden",
    "hp": 16500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Squid_Warden.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Squidgy Slime",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Squidgy_Slime.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Squirrel",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Squirrel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Srezz Yellow Eyes",
    "hp": 6200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Srezz_Yellow_Eyes.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Stabilizing Dread Intruder",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stabilizing_Dread_Intruder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Stabilizing Reality Reaver",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stabilizing_Reality_Reaver.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Stalker",
    "hp": 120,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Stalking Stalk",
    "hp": 17100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stalking_Stalk.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Stampor",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stampor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Starving Wolf",
    "hp": 85,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Starving_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Stone Devourer",
    "hp": 4200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stone_Devourer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Stone Golem",
    "hp": 270,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stone_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Stone Rhino",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stone_Rhino.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Stonecracker",
    "hp": 6500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stonecracker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "Stonerefiner",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Stonerefiner.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.2
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Strange Slime",
    "hp": 15,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Strange_Slime.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Streaked Devourer",
    "hp": 7000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Streaked_Devourer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Strong Glooth Horror",
    "hp": 20000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Strong_Glooth_Horror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sugar Cube",
    "hp": 28,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sugar_Cube.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Sugar Cube Worker",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sugar_Cube_Worker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Sugar Daddy",
    "hp": 9500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sugar_Daddy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Sugar Mommy",
    "hp": 6000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sugar_Mommy.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Sulphider",
    "hp": 21000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sulphider.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sulphur Scuttler",
    "hp": 1300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sulphur_Scuttler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sulphur Spouter",
    "hp": 19000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sulphur_Spouter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Sun-Marked Goanna",
    "hp": 7800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Sun-Marked_Goanna.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "Superior Death Minion",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Superior_Death_Minion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Svoren the Mad",
    "hp": 6310,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Svoren_the_Mad.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Swamp Troll",
    "hp": 55,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Swamp_Troll.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Swampling",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Swampling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Swan Maiden",
    "hp": 800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Swan_Maiden.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Swarmer",
    "hp": 460,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Swarmer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.08
      },
      {
        "type": "ice",
        "multiplier": 1.03
      },
      {
        "type": "energy",
        "multiplier": 0.25
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Swarmer Hatchling",
    "hp": 5,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Swarmer_Hatchling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Tainted Soul",
    "hp": 250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tainted_Soul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Tame Terror Bird",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tame_Terror_Bird.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Tamru the Black",
    "hp": 15500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tamru_the_Black.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Tanjis",
    "hp": 30000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tanjis.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.01
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Tarantula",
    "hp": 225,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tarantula.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Tarbaz",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tarbaz.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Tarnished Spirit",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tarnished_Spirit.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Tazhadur",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tazhadur.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Teleskor",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Teleskor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Teneshpar",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Teneshpar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Tentacle",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tentacle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Tentugly's Head",
    "hp": 75000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tentugly's_Head.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1.3
      }
    ]
  },
  {
    "name": "Terofar",
    "hp": 40000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Terofar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Terramite",
    "hp": 365,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Terramite.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Terrified Elephant",
    "hp": 320,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Terrified_Elephant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Terror Bird",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Terror_Bird.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Terrorsleep",
    "hp": 7200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Terrorsleep.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.85
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Thaian",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thaian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "holy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "death",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Thaian's Ghost",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thaian's_Ghost.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Thalas",
    "hp": 4100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thalas.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Thanatursus",
    "hp": 7200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thanatursus.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Thawing Dragon Lord",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thawing_Dragon_Lord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Abomination",
    "hp": 750000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Abomination.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "The Armored Voidborn",
    "hp": 60000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Armored_Voidborn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.030000000000000027
      },
      {
        "type": "holy",
        "multiplier": 0.030000000000000027
      },
      {
        "type": "death",
        "multiplier": 0.030000000000000027
      },
      {
        "type": "fire",
        "multiplier": 0.030000000000000027
      },
      {
        "type": "ice",
        "multiplier": 0.030000000000000027
      },
      {
        "type": "energy",
        "multiplier": 0.030000000000000027
      },
      {
        "type": "earth",
        "multiplier": 0.030000000000000027
      }
    ]
  },
  {
    "name": "The Axeorcist",
    "hp": 5100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Axeorcist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Big Bad One",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Big_Bad_One.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "The Blazing Time Guardian",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Blazing_Time_Guardian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": -2
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Blightfather",
    "hp": 400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Blightfather.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Bloodtusk",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Bloodtusk.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "The Bloodweb",
    "hp": 1750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Bloodweb.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "The Book of Death",
    "hp": 7800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Book_of_Death.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "The Book of Secrets",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Book_of_Secrets.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Collector",
    "hp": 340,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Collector.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Count",
    "hp": 1250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Count.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Count of the Core",
    "hp": 500000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Count_of_the_Core.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": -0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Dark Dancer",
    "hp": 805,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Dark_Dancer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Diamond Blossom",
    "hp": 20000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Diamond_Blossom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Dread Maiden",
    "hp": 300000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Dread_Maiden.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Dreadorian",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Dreadorian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The End of Days",
    "hp": 90000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_End_of_Days.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": -1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Evil Eye",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Evil_Eye.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The False God",
    "hp": 300000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_False_God.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The First Dragon",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_First_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Flaming Orchid",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Flaming_Orchid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Forgemaster (Creature)",
    "hp": 10500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Forgemaster_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Freezing Time Guardian",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Freezing_Time_Guardian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": -2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Frog Prince",
    "hp": 55,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Frog_Prince.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.020000000000000018
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "The Great Schnitzel",
    "hp": 110000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Great_Schnitzel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Hag",
    "hp": 935,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Hag.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Hairy One",
    "hp": 325,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Hairy_One.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Halloween Hare",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Halloween_Hare.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Handmaiden",
    "hp": 19500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Handmaiden.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Horned Fox",
    "hp": 265,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Horned_Fox.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Hungerer",
    "hp": 2000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Hungerer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.11
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Imperor",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Imperor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Keeper",
    "hp": 40000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Keeper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Lily of Night",
    "hp": 19000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Lily_of_Night.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Lord of the Lice",
    "hp": 80000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Lord_of_the_Lice.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Manhunter",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Manhunter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Many",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Many.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Masked Marauder",
    "hp": 7320,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Masked_Marauder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Mean Masher",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Mean_Masher.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Mega Magmaoid",
    "hp": 104000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Mega_Magmaoid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": -6
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Monster",
    "hp": 45000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Monster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Moonlight Aster",
    "hp": 4500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Moonlight_Aster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "The Mutated Pumpkin",
    "hp": 500000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Mutated_Pumpkin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Nightmare Beast",
    "hp": 750000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Nightmare_Beast.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Noxious Spawn",
    "hp": 9500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Noxious_Spawn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Obliverator",
    "hp": 9020,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Obliverator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Old Whopper",
    "hp": 785,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Old_Whopper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Old Widow",
    "hp": 3200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Old_Widow.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Pale Count",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Pale_Count.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Pale Worm",
    "hp": 435000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Pale_Worm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "holy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "death",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "energy",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "The Percht Queen",
    "hp": 2300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Percht_Queen.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "holy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "death",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "fire",
        "multiplier": 0.30000000000000004
      },
      {
        "type": "ice",
        "multiplier": -1
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "The Pit Lord",
    "hp": 5270,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Pit_Lord.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "The Plasmother",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Plasmother.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Ravager",
    "hp": 53500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Ravager.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "The Red Knight",
    "hp": 200000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Red_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 0
      },
      {
        "type": "death",
        "multiplier": -1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Shatterer",
    "hp": 80000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Shatterer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Snapper",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Snapper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "The Souldespoiler",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Souldespoiler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Time Guardian",
    "hp": 290000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Time_Guardian.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "The Unarmored Voidborn",
    "hp": 250000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Unarmored_Voidborn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 4
      },
      {
        "type": "holy",
        "multiplier": 4
      },
      {
        "type": "death",
        "multiplier": 4
      },
      {
        "type": "fire",
        "multiplier": 3.55
      },
      {
        "type": "ice",
        "multiplier": 4
      },
      {
        "type": "energy",
        "multiplier": 3.55
      },
      {
        "type": "earth",
        "multiplier": 3.55
      }
    ]
  },
  {
    "name": "The Voice of Ruin",
    "hp": 5500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Voice_of_Ruin.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Weakened Count",
    "hp": 740,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Weakened_Count.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "The Welter",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Welter.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "The Winter Bloom",
    "hp": 4750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/The_Winter_Bloom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Thief (Creature)",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thief_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Thieving Squirrel",
    "hp": 55,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thieving_Squirrel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Thorn Lily",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thorn_Lily.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Thornback Tortoise",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thornback_Tortoise.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Thornfire Wolf",
    "hp": 600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thornfire_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Thul",
    "hp": 2950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Thul.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.15
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Tiger",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tiger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Time Keeper",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Time_Keeper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Timedisplaced Anomaly (Banuta)",
    "hp": 52500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Timedisplaced_Anomaly_(Banuta).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Timedisplaced Anomaly (Chazorai)",
    "hp": 56000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Timedisplaced_Anomaly_(Chazorai).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Timedisplaced Anomaly (Warzone)",
    "hp": 60000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Timedisplaced_Anomaly_(Warzone).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Timira the Many-Headed",
    "hp": 75000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Timira_the_Many-Headed.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Tiquandas Revenge",
    "hp": 1800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tiquandas_Revenge.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.99
      },
      {
        "type": "fire",
        "multiplier": 1.01
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Tirecz",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tirecz.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Toad",
    "hp": 135,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Toad.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Tomb Servant",
    "hp": 475,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tomb_Servant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Tormented Ghost",
    "hp": 210,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tormented_Ghost.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.99
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Tormentor",
    "hp": 4100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tormentor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Tortoise",
    "hp": 185,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tortoise.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Toxic Swarm",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Toxic_Swarm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Travelling Merchant",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Travelling_Merchant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Tremendous Tyrant",
    "hp": 11500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tremendous_Tyrant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.85
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Tremor Worm",
    "hp": 125000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tremor_Worm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.25
      },
      {
        "type": "holy",
        "multiplier": 0.25
      },
      {
        "type": "death",
        "multiplier": 0.25
      },
      {
        "type": "fire",
        "multiplier": 0.25
      },
      {
        "type": "ice",
        "multiplier": 0.25
      },
      {
        "type": "energy",
        "multiplier": 0.25
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "Tremorak",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tremorak.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.15000000000000002
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Troll",
    "hp": 50,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Troll.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Troll Champion",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Troll_Champion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Troll Guard",
    "hp": 60,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Troll_Guard.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Troll Legionnaire",
    "hp": 210,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Troll_Legionnaire.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Troll Marauder",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Troll_Marauder.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.15
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Troll-Trained Salamander",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Troll-Trained_Salamander.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Trollwut",
    "hp": 280,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Trollwut.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Tromphonyte",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tromphonyte.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Tropical Desolator",
    "hp": 15500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tropical_Desolator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "True Dawnfire Asura",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/True_Dawnfire_Asura.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "True Frost Flower Asura",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/True_Frost_Flower_Asura.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "True Midnight Asura",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/True_Midnight_Asura.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Truffle",
    "hp": 70,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Truffle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Truffle Cook",
    "hp": 54,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Truffle_Cook.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Truffle Worker",
    "hp": 26,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Truffle_Worker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Tunnel Devourer",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tunnel_Devourer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Tunnel Tyrant",
    "hp": 5200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tunnel_Tyrant.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.3
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Turbulent Elemental",
    "hp": 28000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Turbulent_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.2
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Twisted Pooka",
    "hp": 700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Twisted_Pooka.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Twisted Shaper",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Twisted_Shaper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Twisterror",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Twisterror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Two-Headed Turtle",
    "hp": 5010,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Two-Headed_Turtle.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Tyrn",
    "hp": 12000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tyrn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Tzumrah the Dazzler",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Tzumrah_the_Dazzler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Ugly Monster",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ugly_Monster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Unaz the Mean",
    "hp": 28000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Unaz_the_Mean.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Undead Cavebear",
    "hp": 450,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undead_Cavebear.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Undead Dragon",
    "hp": 8350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undead_Dragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Undead Elite Gladiator",
    "hp": 8000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undead_Elite_Gladiator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Undead Gladiator",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undead_Gladiator.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Undead Jester",
    "hp": 355,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undead_Jester.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Undead Mine Worker",
    "hp": 65,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undead_Mine_Worker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Undead Pet of Chayenne",
    "hp": 8350,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undead_Pet_of_Chayenne.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Undead Prospector",
    "hp": 100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undead_Prospector.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Undertaker",
    "hp": 20100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Undertaker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.15
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Unexpected",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Unexpected.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.5
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Ungreez",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ungreez.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0.4
      }
    ]
  },
  {
    "name": "Uninvited",
    "hp": 4700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Uninvited.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Unsolicited",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Unsolicited.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Unstable Spark",
    "hp": 10500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Unstable_Spark.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Unwanted",
    "hp": 3750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Unwanted.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Urmahlullu the Immaculate",
    "hp": 120000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Urmahlullu_the_Immaculate.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Ushuriel",
    "hp": 31500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Ushuriel.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.75
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Usurper Archer",
    "hp": 7300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Usurper_Archer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Usurper Commander",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Usurper_Commander.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.99
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Usurper Knight",
    "hp": 8200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Usurper_Knight.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.65
      },
      {
        "type": "holy",
        "multiplier": 0.85
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Usurper Warlock",
    "hp": 7500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Usurper_Warlock.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.6799999999999999
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.95
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Utua Stone Sting",
    "hp": 6400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Utua_Stone_Sting.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Valkyrie",
    "hp": 190,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Valkyrie.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Vampire",
    "hp": 475,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vampire.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.75
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Vampire Bride",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vampire_Bride.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Vampire Pig",
    "hp": 305,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vampire_Pig.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Vampire Viscount",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vampire_Viscount.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Vampiric Blood",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vampiric_Blood.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Varg",
    "hp": 5400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Varg.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Varnished Diremaw",
    "hp": 9000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Varnished_Diremaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Vashresamun",
    "hp": 4000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vashresamun.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Venerable Foam Stalker",
    "hp": 5650,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Venerable_Foam_Stalker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.3
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Venerable Girtablilu",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Venerable_Girtablilu.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Vengar",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vengar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": -10
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Vermin Swarm",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vermin_Swarm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Versperoth",
    "hp": 100000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Versperoth.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.09999999999999998
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Vexclaw",
    "hp": 8500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vexclaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.25
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Vibrant Phantom",
    "hp": 27000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vibrant_Phantom.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Vicious Ink Splash",
    "hp": 1950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vicious_Ink_Splash.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.85
      }
    ]
  },
  {
    "name": "Vicious Lich",
    "hp": 880,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vicious_Lich.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Vicious Manbat",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vicious_Manbat.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Vicious Squire",
    "hp": 1000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vicious_Squire.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1.2
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Vile Destroyer",
    "hp": 3700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vile_Destroyer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1.03
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Vile Grandmaster",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vile_Grandmaster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Vilear",
    "hp": 50000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vilear.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": -10
      },
      {
        "type": "earth",
        "multiplier": 0.75
      }
    ]
  },
  {
    "name": "Vok the Freakish",
    "hp": 32000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vok_the_Freakish.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Vortex Spawn",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vortex_Spawn.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Vulcongra",
    "hp": 1600,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vulcongra.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Vulnerable Cocoon",
    "hp": 200000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Vulnerable_Cocoon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Wafer Paper Butterfly",
    "hp": 2,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wafer_Paper_Butterfly.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Wailing Widow",
    "hp": 850,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wailing_Widow.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Walker",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Walker.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 0.6
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Walking Pillar",
    "hp": 38000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Walking_Pillar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.55
      },
      {
        "type": "energy",
        "multiplier": 0.4
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Wandering Pillar",
    "hp": 37000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wandering_Pillar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.15
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 0.4
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "War Golem",
    "hp": 4300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/War_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.85
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "War Wolf",
    "hp": 140,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/War_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Wardragon",
    "hp": 6960,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wardragon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.85
      },
      {
        "type": "fire",
        "multiplier": 0.6
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Warlock",
    "hp": 3500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Warlock.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.08
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.050000000000000044
      }
    ]
  },
  {
    "name": "Warlord Ruzad",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Warlord_Ruzad.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.19999999999999996
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.99
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Wasp",
    "hp": 35,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wasp.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Wasp (Nostalgia)",
    "hp": 35,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wasp_(Nostalgia).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Waspoid",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Waspoid.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.02
      },
      {
        "type": "holy",
        "multiplier": 1.07
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Water Buffalo",
    "hp": 390,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Water_Buffalo.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Water Elemental",
    "hp": 550,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Water_Elemental.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.7
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.25
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Weakened Demon",
    "hp": 5,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Weakened_Demon.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Weakened Frazzlemaw",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Weakened_Frazzlemaw.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Weakened Glooth Horror",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Weakened_Glooth_Horror.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Weakened Shlorg",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Weakened_Shlorg.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Webster",
    "hp": 2950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Webster.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.01
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Weeper",
    "hp": 6800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Weeper.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Werebadger",
    "hp": 1700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werebadger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Werebear",
    "hp": 2400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werebear.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Wereboar",
    "hp": 2200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wereboar.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Werecrocodile",
    "hp": 5280,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werecrocodile.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0.75
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.95
      }
    ]
  },
  {
    "name": "Werefox",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werefox.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.95
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.9
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Werehyaena",
    "hp": 2700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werehyaena.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Werehyaena Shaman",
    "hp": 2500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werehyaena_Shaman.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.95
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Werelion",
    "hp": 2800,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werelion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.55
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Werelioness",
    "hp": 3000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werelioness.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.65
      },
      {
        "type": "ice",
        "multiplier": 1.25
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Werepanther",
    "hp": 4200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werepanther.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.25
      },
      {
        "type": "death",
        "multiplier": 0.8
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.9
      }
    ]
  },
  {
    "name": "Weretiger",
    "hp": 5000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Weretiger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.25
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.75
      },
      {
        "type": "earth",
        "multiplier": 1.15
      }
    ]
  },
  {
    "name": "Werewolf",
    "hp": 1955,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Werewolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0.44999999999999996
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "White Deer",
    "hp": 195,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/White_Deer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "White Lion",
    "hp": 2700,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/White_Lion.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.6
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.2
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "White Pale",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/White_Pale.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "White Shade",
    "hp": 260,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/White_Shade.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.050000000000000044
      },
      {
        "type": "holy",
        "multiplier": 1.1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "White Tiger",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/White_Tiger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "White Weretiger",
    "hp": 6100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/White_Weretiger.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.75
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.15
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.4
      },
      {
        "type": "earth",
        "multiplier": 1.2
      }
    ]
  },
  {
    "name": "Wiggler",
    "hp": 1200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wiggler.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.95
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Wild Dog",
    "hp": 20,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wild_Dog.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Wild Horse",
    "hp": 75,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wild_Horse.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Wild Warrior",
    "hp": 135,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wild_Warrior.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Willi Wasp",
    "hp": 250,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Willi_Wasp.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Wilting Leaf Golem",
    "hp": 380,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wilting_Leaf_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.05
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Winter Wolf",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Winter_Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Wisp",
    "hp": 115,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wisp.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.4
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Witch",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Witch.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Wolf",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wolf.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Wolf (Nostalgia)",
    "hp": 25,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wolf_(Nostalgia).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.99
      },
      {
        "type": "death",
        "multiplier": 1.01
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.01
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "Woodling",
    "hp": 80,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Woodling.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Worker Golem",
    "hp": 1470,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Worker_Golem.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 0.9
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  },
  {
    "name": "Worker Imp",
    "hp": 13500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Worker_Imp.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "World Devourer",
    "hp": 25000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/World_Devourer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Worm Priestess",
    "hp": 1100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Worm_Priestess.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.95
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 0.95
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Wounded Cave Draptor",
    "hp": 5,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wounded_Cave_Draptor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Wrath of the Emperor",
    "hp": 55000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wrath_of_the_Emperor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.05
      },
      {
        "type": "holy",
        "multiplier": 1.15
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.4
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Wrathful Archivist",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wrathful_Archivist.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Wyrm",
    "hp": 1825,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wyrm.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.25
      }
    ]
  },
  {
    "name": "Wyvern",
    "hp": 795,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Wyvern.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.9
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Xenia",
    "hp": 200,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Xenia.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Xogixath",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Xogixath.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Yaga the Crone",
    "hp": 620,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Yaga_the_Crone.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.01
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.05
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.99
      }
    ]
  },
  {
    "name": "Yakchal",
    "hp": 5750,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Yakchal.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.5
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0.19999999999999996
      }
    ]
  },
  {
    "name": "Yalahari (Creature)",
    "hp": 150,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Yalahari_(Creature).gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Yeti",
    "hp": 950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Yeti.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1.1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.08
      },
      {
        "type": "earth",
        "multiplier": 1
      }
    ]
  },
  {
    "name": "Yielothax",
    "hp": 1500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Yielothax.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0.5
      },
      {
        "type": "fire",
        "multiplier": 0.75
      },
      {
        "type": "ice",
        "multiplier": 1.05
      },
      {
        "type": "energy",
        "multiplier": 1.05
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Yirkas Blue Scales",
    "hp": 6300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Yirkas_Blue_Scales.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0.9
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.85
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Young Goanna",
    "hp": 6950,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Young_Goanna.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1.2
      },
      {
        "type": "earth",
        "multiplier": 0.8
      }
    ]
  },
  {
    "name": "Young Sea Serpent",
    "hp": 1050,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Young_Sea_Serpent.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.2
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 1.15
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 1.05
      }
    ]
  },
  {
    "name": "Young Troll",
    "hp": 30,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Young_Troll.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.9
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 1.1
      }
    ]
  },
  {
    "name": "Zanakeph",
    "hp": 13000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zanakeph.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.8
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Zarabustor",
    "hp": 5100,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zarabustor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1.01
      },
      {
        "type": "holy",
        "multiplier": 1.01
      },
      {
        "type": "death",
        "multiplier": 1
      },
      {
        "type": "fire",
        "multiplier": 0
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.09999999999999998
      }
    ]
  },
  {
    "name": "Zavarash",
    "hp": 35000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zavarash.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.2
      },
      {
        "type": "death",
        "multiplier": 0.65
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.6
      },
      {
        "type": "energy",
        "multiplier": 0.6
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Zevelon Duskbringer",
    "hp": 1400,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zevelon_Duskbringer.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 1.05
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Zomba",
    "hp": 300,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zomba.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 1.08
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 1.15
      },
      {
        "type": "energy",
        "multiplier": 1
      },
      {
        "type": "earth",
        "multiplier": 0.6
      }
    ]
  },
  {
    "name": "Zombie",
    "hp": 500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zombie.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 1
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Zorvorax",
    "hp": 10000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zorvorax.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.9
      },
      {
        "type": "holy",
        "multiplier": 1.35
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.8
      },
      {
        "type": "ice",
        "multiplier": 0.5
      },
      {
        "type": "energy",
        "multiplier": 0.8
      },
      {
        "type": "earth",
        "multiplier": 0
      }
    ]
  },
  {
    "name": "Zugurosh",
    "hp": 90500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zugurosh.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 0.5
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 0
      },
      {
        "type": "fire",
        "multiplier": 0.7
      },
      {
        "type": "ice",
        "multiplier": 0.7
      },
      {
        "type": "energy",
        "multiplier": 0.7
      },
      {
        "type": "earth",
        "multiplier": 0.7
      }
    ]
  },
  {
    "name": "Zulazza the Corruptor",
    "hp": 46500,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zulazza_the_Corruptor.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.8
      },
      {
        "type": "death",
        "multiplier": 0.7
      },
      {
        "type": "fire",
        "multiplier": 1
      },
      {
        "type": "ice",
        "multiplier": 0.8
      },
      {
        "type": "energy",
        "multiplier": 0
      },
      {
        "type": "earth",
        "multiplier": 0.30000000000000004
      }
    ]
  },
  {
    "name": "Zushuka",
    "hp": 15000,
    "image_url": "https://tibia.fandom.com/wiki/Special:Redirect/file/Zushuka.gif",
    "damageTypes": [
      {
        "type": "physical",
        "multiplier": 1
      },
      {
        "type": "holy",
        "multiplier": 0.7
      },
      {
        "type": "death",
        "multiplier": 1.1
      },
      {
        "type": "fire",
        "multiplier": 0.5
      },
      {
        "type": "ice",
        "multiplier": 0
      },
      {
        "type": "energy",
        "multiplier": 1.1
      },
      {
        "type": "earth",
        "multiplier": 0.5
      }
    ]
  }
];