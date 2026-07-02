<template>
  <GuideLayout>

    <h1>3 Easy Elementalist Elites To Cap For Beginners!</h1>

    <p class="intro">
      Today we are going to have a look at some Elite skills for Guild Wars Reforged Elementalists that you
      can cap very easily!
    </p>

    <GuideImage class="guide-image-wrapper" :src="EleSkills"
      caption="Double Dragon, Mind Freeze and Master Of Magic Skill Icons!" />

    <GuideSection title="Double Dragon" :paragraphs="[
      'Location: This elite is located in Wajjun Bazaar in Factions, and is cappable as soon as you have unlocked travel between continents. Get it from Lian, Dragons Petal',
      'Type: Double Dragon is a PBAOE fire vortex that targets yourself and another member of your party. It will cause some SERIOUS damage to any enemies that get near either person. ',
      'Usage: You can just hit the skill and it will auto target another valid member of your party, or you can click their name in the party menu and then use the skill to target them specifically!',
      'A Simple Double Dragon Build: OgNDoMz/MCjixQcXgMwF0CZC',
    ]" />

    <GuideImage class="guide-image-wrapper" :src="DoubleDragon"
      caption="Double Dragon causing a train wreck in marga coast!" />

    <GuideSection title="Mind Freeze" :paragraphs="[
      'Location: This skill is again cappable in Factions, this time in the Undercity from Baubao Wavewrath, a Kappa Elementalist boss.',
      'Type: Mind Freeze is a great little skill, it deals direct damage to one enemy and applies a brutal, if short lasting slow effect. It also causes exhaustion, allowing you to run skills that gain additional effects like Swirling Aura, when exhausted!',
      'Usage: Use the skill to apply direct damage (doubled if you have more energy than your opponent), and watch as they struggle to reach you. Great for targeting melee enemies! Hit swirling aura to watch your party get a massive health regen hit and 50% block chance for projectiles for several seconds while the exhaustion is present, your healer will thank you!',
      'A Simple Mind Freeze Build: OgNDsMz/EWbdTLaIDapTmA',
    ]" />

    <GuideImage class="guide-image-wrapper" :src="MindFreeze"
      caption="A mantid in Ferndale after too much ice cream..." />

    <GuideSection title="Master Of Magic" :paragraphs="[
      'Location: This one is captured from the Consulate Dock mission in Nightfall, from Captain Mwende',
      'Type: This is an energy storage skill and it boosts your elemental attributes. It allows you to run spells from multiple elements on your skillbar, as well as having points left over to put into mesmer or necro attributes for giggles.',
      'Usage: Wear an Energy Storage headpeice and slap an Energy Storage rune on it, maintain the Elite Enchantment as much as possible for a buff to your Elemental attributes! Watch out for disenchants!',
      'Step 1: Take Master Of Magic, Step 2: Take whatever spells you want! Build Template: OgVCMMzj1wc8NErwi0BRQAA'
    ]" , />

    <GuideImage class="guide-image-wrapper" :src="MasterOfMagic"
      caption="Trolling some Kournans in Turai's Procession" />

    <GuideSection title="Why These Elites?" :paragraphs="[
      'These three skills are some of the first cappable skills you will come across in the wild, unless you are a maniac doing a Prophecies run as God itended.',
      'These are not going to be the very best Meta skills you can add to a build (well, Double Dragon is pretty awesome), but they WILL act as stepping stones to get you to where you need to be!',
      'Check out my youtube channel for more elementalist builds! Thanks for reading!'
    ]" , />

    <GuideVideo src="https://www.youtube.com/embed/xKABPU54uPM" caption="Water Support (Ward Against Harm)" />

    <GuideVideo src="https://www.youtube.com/embed/Yh9Q1ODRJwk" caption="Searing Flames!" />

    <GuideVideo src="https://www.youtube.com/embed/B_jcwuYOkTk" caption="Earth Support (Sandstorm)" />

    <GuideVideo src="https://www.youtube.com/embed/-CuYDppUbFU" caption="Glimmering Mark & Thunderclap" />

  </GuideLayout>
</template>

<script setup>
import GuideLayout from '../../components/GuideLayout.vue'
import GuideImage from '../../components/GuideImage.vue'
import GuideSection from '../../components/GuideSection.vue'
import GuideVideo from '@/components/GuideVideo.vue'

import EleSkills from '../../assets/EleSkills.png'
import DoubleDragon from '../../assets/DoubleDragon.png'
import MindFreeze from '../../assets/MindFreeze.png'
import MasterOfMagic from '../../assets/MasterOfMagic.png'

</script>

<style scoped>
.intro {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
</style>
