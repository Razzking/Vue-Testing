<script setup lang="ts">
import {onErrorCaptured, ref, shallowRef} from 'vue'
import PropsTesting from './components/PropsTesting.vue'
import SlotsTesting from './components/SlotsTesting.vue'
import HelloWorld from './components/HelloWorld.vue'
import Composable from './components/Composable.vue';
import CustomDirectives from './components/CustomDirectives.vue';
import KeepAlive_1 from './components/KeepAlive_1.vue';
import KeepAlive_2 from './components/KeepAlive_2.vue';
import Transitions1 from './components/Transitions.vue';
import Teleport1 from './components/Teleport.vue';
import AsyncSuspense from './components/AsyncSuspense.vue';

const data:string = "Parent Data";
const testType = ref('default');
const current = shallowRef(KeepAlive_1)


onErrorCaptured((err)=>{
  console.log('<<<<<<<< Faild to fetch >>>>>>>')
})
</script>

<template>
<!--  Sectect Test -->
  <select name="" class="testSelect" v-model="testType">

    <option disabled value="default">Select Test</option>
    <option value="Props" >Props</option>
    <option value="Slots">Slots</option>
    <option value="AttrInherit">Attr_Inherit</option>
    <option value="Composable">Composable</option>
    <option value="CustomDirectives">CustomDirectives</option>
    <option value="KeepAlive">KeepAlive</option>
    <option value="Transition">Transition</option>
    <option value="Teleport">Teleport</option>
    <option value="Suspense">Suspence</option>


  </select>

<!-- Props Testing -->
  <div v-if="testType === 'Props'">
    <div class="heading">
      <h1 style="margin-top: 0px;">Props_Testing</h1>
    </div>
    <PropsTesting :inputValue="'name'"/> <br><br>
    <PropsTesting :inputValue="'Last Name'"/><br><br>
    <PropsTesting :inputValue="'Email'"/><br><br>
    <PropsTesting :inputValue="'Phone No.'"/><br><br>
    <PropsTesting />
  </div>

<!--  Slots Testing -->
  <div v-else-if="testType === 'Slots'">
    <div class="heading">
      <h1 style="margin-top: 0px;">Slots_Testing</h1>
    </div>
    <SlotsTesting> <h2>Slot = 1</h2> </SlotsTesting>

    <SlotsTesting> 

      <template #slot2 >    <!--  Named Slots -->
        <h3>multi slots with name slot = 2</h3>
      </template>

      <h2>Slot = 1</h2>   <!-- Default Slot  -->

      <template v-slot:slot3="{text}" >    <!-- Scoped Slots -->
        <h3>multi slots with name slot = 3</h3>
        <h3>{{ text }}</h3>     <!--  child data  -->
        <h3>{{ data }}</h3>     <!--  self data  -->
      </template> 
      </SlotsTesting>
    <SlotsTesting #slot3 >
      <h1>hello slot 3</h1>
    </SlotsTesting>
  </div>

<!--  Attrs_Inherits Testing -->
  <div v-else-if="testType === 'AttrInherit'">
    <div class="heading">
      <h1 style="margin-top: 0px;">Attrs_Testing</h1>
    </div>
    <HelloWorld id="hellotag"  style="text-decoration: underline;"/>
  </div>

<!--  Composable Testing -->
  <div v-else-if="testType === 'Composable'">
    <div class="heading">
      <h1 style="margin-top: 0px;">Composable_Testing</h1>
    </div>
    <Composable/>
  </div>

<!--  CustomDirectives Testing -->
  <div v-else-if="testType === 'CustomDirectives'">
    <div class="heading">
      <h1 style="margin-top: 0px;">CustomDirectives_Testing</h1>
    </div>
    <CustomDirectives/>
  </div>

<!--  KeepAlive Testing -->
  <div v-else-if="testType === 'KeepAlive'">
    <div class="heading">
      <h1 style="margin-top: 0px;">KeepAlive_Testing</h1>
    </div>

    <button @click="current = KeepAlive_1">Component A</button>
    <button @click="current = KeepAlive_2">Component A</button><br><br><br>

    <KeepAlive>
      <component :is="current" /> 
    </KeepAlive>

  </div>

<!--  Transition Testing -->
<div v-else-if="testType === 'Transition'">
  <div class="heading">
      <h1 style="margin-top: 0px;">Transition_Testing</h1>
  </div>
  <Transitions1/>


</div>

<!--  Teleprot Testing -->
<div v-else-if="testType === 'Teleport'">
  <div class="heading">
      <h1 style="margin-top: 0px;">Teleport_Testing</h1>
  </div>
  <Teleport1/>
</div>

<!--  Suspense Testing -->
<div v-else-if="testType === 'Suspense'">
  <div class="heading">
      <h1 style="margin-top: 0px;">Suspense_Testing</h1>
  </div>
  <Suspense>
    <AsyncSuspense/>

    <template #fallback>
      <h1> Loading....</h1>
    </template>

  </Suspense>

</div>

</template>

<style scoped>
.testSelect{
  font-size: 20px;
  outline-color: red;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
}
div:not(.heading){
  border: black solid 2px;
  border-radius: 20px;
  background-color: rgb(209, 245, 245);
  height: 800px;
  width: 1000px;
}
.heading{
  border-bottom: black solid 2px;
  background-color: rgb(220, 220, 220);
  margin: 0px;
  border-radius: 20px;
  width: 1000px;
}

</style>
