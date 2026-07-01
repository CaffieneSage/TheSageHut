<template>
  <GuideLayout>

    <h1>3 Mesmer Elites you NEED to cap!</h1>

    <p class="intro">
      We are going to have a look at a trio of Mesmer elite skills that any self respecting Mesmer player probably wants to cap on their character at some point! Read on.
    </p>

    <GuideImage class="guide-image-wrapper" :src="MesSkills"
      caption="Power Block, Energy Surge and Ineptitude!" />

    <GuideSection title="Power Block" :paragraphs="[
      'Location: This skill can be capped at the end of the prophecies campaign, in the Perditions Rock explorable from Lyssas Cursed. You can also grab it in the Against The Charr mission from Anmat The Trickster.',
      'Type: A Domination spell, with attitude! Have fun with it! ',
      'Usage: Power Block is the mother of all interrupts. The enemy will be happily casting a spell, until you hit Power Block and their entire skillbar goes on cooldown for...a long time... Its hard to explain how frustrating that is until you have been on the recieving end!',
      'Power Block will slot into most Domination builds nicely: OQNDAqwDSaAcAFANBZAEBylyEA',
    ]" />

    <GuideImage class="guide-image-wrapper" :src="Imps"
      caption="Trying to interrupt these little guys is HARD!" />

    <GuideSection title="Energy Surge" :paragraphs="[
      'Location: This skill is available in many places, Milefaun Mindflayer in Arborstone is a good example. Check the wiki for an exhaustive list as there are A LOT of places seriously!',
      'Type: The quintissential Domination skill that EVERYBODY runs, and for good reason.',
      'Usage: AI will make VERY good use of this skill as it is a simple select a target you want to delete and fire. Its really hard to mess up, and even though it took a nerf I have been hearing it is still very viable for most content.',
      'Energy Surge will also happily slot into most Domination builds: OQNDAqwDSaAcAnANBXAmAylyEA',
    ]" />

    <GuideImage class="guide-image-wrapper" :src="EnergySurge"
      caption="Charr in Norrhart Domain finding out about Energy Surge!" />

    <GuideSection title="Ineptitude" :paragraphs="[
      'Location: Another skill found closer to the end of Prophecies, thankfully not quite as far as Power Block. Go cap it from Wyt Sharpfeather in Mineral Springs, Im sure he wont mind!',
      'Type: I love Illusion in Guild Wars, no surprises that I like Ineptitude then.',
      'Usage: It hexes your target and any adjacent enemies, and if those enemies attack with the hex active they take a sizeable chunk of damage and are blinded!',
      'Chuck it on your own Illusion build, or use this one: OQNDAawDSDOrAvAkAZAEBylyEA'
    ]" , />

    <GuideImage class="guide-image-wrapper" :src="BukdekByway"
      caption="These Am Fah criminals sure are...inept!" />

    <GuideSection title="These are all good skills for a Mesmer to have in their arsenal." :paragraphs="[
      'Interrupts are something a good Mesmer player should be able to do at least to a degree. You dont have to have lightning reflexes, especially with Power Block, just wait for a spell with a long cast time and practice, practice, practice!',
      'Energy surge may or may not be a Meta skill now, but you should definitely have access to it. That energy depletion is pretty rough even with slightly lower damage!',
      'Ineptitude is just one of those skills that, if you have had it used on you, you totally get why its on this list. Go cap it and happy hunting',
      'If you are interested in some more Mesmer guides, check out my youtube channel via the links below!'
    ]" , />

    <GuideVideo src="https://www.youtube.com/embed/5KBcZXqWzk0" caption="Visions Of Regret" />

    <GuideVideo src="https://www.youtube.com/embed/HlTssbAld3Y" caption="Crippling Anguish" />

  </GuideLayout>
</template>

<script setup>
import GuideLayout from '../../components/GuideLayout.vue'
import GuideImage from '../../components/GuideImage.vue'
import GuideSection from '../../components/GuideSection.vue'
import GuideVideo from '@/components/GuideVideo.vue'

import MesSkills from '../../assets/MesSkills.png'
import Imps from '../../assets/Imps.png'
import EnergySurge from '../../assets/EnergySurge.png'
import BukdekByway from '../../assets/BukdekByway.png'

</script>

<style scoped>
.intro {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
</style>
