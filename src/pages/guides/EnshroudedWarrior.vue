<template>
  <GuideLayout>
    <h1>How To Get A Warrior Off The Ground On Enshrouded!</h1>

    <p class="intro">
      We Are going to be checking out some of the basics of playing a warrior in Enshrouded in this
      one! It's one of the simplest and most fun ways to play honestly, and its hard to argue with a
      peice of folded steel after all!
    </p>

    <GuideImage
      class="guide-image-wrapper"
      :src="WhiteWolf"
      caption="A White Wolf Sword is a trusty companion, that faint glow really helps in dark places!"
    />

    <GuideSection
      title="Weapons"
      :paragraphs="[
        'There are a few choices of weapon you can find and make in Enshrouded when playing a warrior. The main choice you are going to need to make is \'Do I want to go single handed or two handed?\'',
        'One Handed: The nice thing about going sword and board is the extra utility that shield gives you. Whatever you decide, remember to take the correct perks to buff its damage. i.e if you are running a 1H mace you want to take the perks for one handed blunt damage. Take one handed sword perks for cutting damage sword and axe etc.',
        'Two Handed: Two handed is a different playstyle to running with a shield. You can block if you are skilled, but it is less effective and more risky. Learning to dodge is really important and knowing when to block and when to dodge is a useful survival skill! Ideally you want to play almost like a rogue, just dont be there when the hammer falls. Launch a short string of deadly blows from behind or from the side when enemies are recovering from a strike.',
      ]"
    />

    <GuideImage
      class="guide-image-wrapper"
      :src="WarriorArmoursMale"
      caption="A Male Warrior wearing Fur, Rising Fighter, Tank and Warrior sets!"
    />

    <GuideSection
      title="Armour"
      :paragraphs="[
        'A warrior is going to have a higher armour rating overall than a pure mage, ranger or rogue. It doesnt make you invincible but combined with the fact you are going to naturally have more perk points in constitution nodes, you can become quite a tough nut to crack.',
        'The crafted armour peices are fine when you start out, but loot chests, especially the higher value gold ones, provide opportunities for better quality blue, purple and gold gear. The higher coloured peices have better base stats and can be upgraded further, although they can be a pain to obtain. Its also possible to get variants you cant craft yet or at all, worth thinking about!',
        'From what I understand, armour from all peices you are wearing are added together to give you a final armour rating. Physical Armour is going to help against physical strikes that connect with you, wheras Magical Armour will help more against magic, spells and magical enemy attacks.',
        'Bonuses on your gear are often going to be as or even more important to your performance than the simpe armour rating you get, its worth looking at what other effects you get from a peice and what upgrades can unlock for you! There arent any set bonuses for equipping an entire set, so wear the bits that provide the best utility and then modify your appearance by equipping other bits and peices as vanity armour to get the best balance between fashion and utility!',
      ]"
    />

    <GuideImage
      class="guide-image-wrapper"
      :src="WarriorArmoursFemale"
      caption="A selection of Female Warrior armours (Fur, Rising Fighter, Adventurer and Warrior)"
    />

    <GuideSection
      title="Items and Consumables"
      :paragraphs="[
        'For a warrior, you are going to want to prioritise foods that provide health, stamina and melee damage buffs. Its worth setting up a farm and taming some goats to get access to milk when you can. Different animals will drop better meats you can use, those early game meats can be combined with things like sweetcorn via the crafting menue to make skewers to get both extra health and melee damage!',
        'You are going to want to use bandages while not in combat so that you can make your health potions go further. Basic bandages are super cheap and only really require cloth and fiber to craft. Get cloth from defeating humanoid enemies or smashing destructible barrels and packages up in towns.',
        'Even though you are playing warrior, its probably a good idea to carry some sort of ranged weapon, probably a bow, you dont need to spec into it hard, just have one equipped and carry some basic arrows so you have the option if and when you need it!',
      ]"
    />

    <GuideImage
      class="guide-image-wrapper"
      :src="TwinMoon"
      caption="Jinn, a Female 2 Handed specialist, wielding an intimidating Twin Moon Greatsword!"
    />

    <GuideSection
      title="What to do?"
      :paragraphs="[
        'You are going to want to rescue the blacksmith first to unlock your first very basic armour set. From there you can go for the Ranger, Alchemist or Farmer. I personally think the alchemist gives you the best utility as he can craft health potions for you! The Farmer is a strong second choice as she allows you to start taming goats to get milk which is a very useful stamina food!',
        'You can start farming chests for better loot basically from the start of the game, its recommended that you unlock the hook and the glider first as it makes traversal much easier and gets you access to more chests to farm!',
        'Once you are moderately geared the NPCs will have quests for you to do, they will unlock more as you complete them and reach higer character and flame levels. Check the quest log to see the current difficulty level of a given quest, as getting repeatedly facerolled and destroyed by a quest in an area you arent really ready for can be a bit soul destroying! ',
      ]"
    />

    <GuideVideo
      src="https://www.youtube.com/embed/LudO7I0CuhI"
      caption="Heres a 2Handed warrior guide I made for my YouTube channel if you would prefer to watch a video!"
    />

    <GuideVideo
      src="https://www.youtube.com/embed/cX25RBhJWMc"
      caption="Heres an nice easy chest farming route to get you started on the gear grind!"
    />

    <GuideVideo
      src="https://www.youtube.com/embed/xlKAkEnDJHg"
      caption="This is a video I made to help you get all the Shroud Roots and Elixir Wells in the starting area!"
    />

    <GuideVideo
      src="https://www.youtube.com/embed/nhIT3-zIhYQ"
      caption="This one is a really short tutorial on how to get crops off the ground so you can make those health potions in bulk!"
    />
  </GuideLayout>
</template>

<script setup>
import GuideLayout from '../../components/GuideLayout.vue'
import GuideImage from '../../components/GuideImage.vue'
import GuideSection from '../../components/GuideSection.vue'
import GuideVideo from '@/components/GuideVideo.vue'

import WhiteWolf from '../../assets/White Wolf Sword.avif'
import WarriorArmoursMale from '../../assets/WarriorArmoursMale.avif'
import TwinMoon from '../../assets/Twin Moon Greatsword.avif'
import WarriorArmoursFemale from '../../assets/WarriorArmoursFemale.avif'
</script>

<style scoped>
.intro {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
</style>
