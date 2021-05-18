<template>
  <div class="mainStage">
    <table>
      <tr>
        <td>
          <button @click="oneOf">One of</button>
        </td>
        <td>
          <button @click="SameFaction">Same Faction</button>
        </td>
        <td>
          <button @click="OppositeFaction">Opposite Faction</button>
        </td>
        <td>
          <button style="color: darkseagreen" @click="scanResident">
            Resident
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <svg
            height="100"
            width="100"
            @click="arrayOfPressed[0] = !arrayOfPressed[0]"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              :stroke-width="arrayOfPressed[0] ? 10 : 3"
              fill="white"
            />
          </svg>
        </td>
        <td>
          <svg
            height="100"
            width="100"
            @click="arrayOfPressed[1] = !arrayOfPressed[1]"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              :stroke-width="arrayOfPressed[1] ? 10 : 3"
              fill="yellow"
            />
          </svg>
        </td>
        <td>
          <svg
            height="100"
            width="100"
            @click="arrayOfPressed[2] = !arrayOfPressed[2]"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              :stroke-width="arrayOfPressed[2] ? 10 : 3"
              fill="purple"
            />
          </svg>
        </td>
        <td>
          <button style="color: indianred" @click="scanPersonoid">
            Personoid
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p>{{ arrayOfChances[0].toFixed(1) }}</p>
        </td>
        <td>
          <p>{{ arrayOfChances[1].toFixed(1) }}</p>
        </td>
        <td>
          <p>{{ arrayOfChances[2].toFixed(1) }}</p>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <svg
            height="100"
            width="100"
            @click="arrayOfPressed[3] = !arrayOfPressed[3]"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              :stroke-width="arrayOfPressed[3] ? 10 : 3"
              fill="blue"
            />
          </svg>
        </td>
        <td>
          <svg
            height="100"
            width="100"
            @click="arrayOfPressed[4] = !arrayOfPressed[4]"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              :stroke-width="arrayOfPressed[4] ? 10 : 3"
              fill="red"
            />
          </svg>
        </td>
        <td>
          <svg
            height="100"
            width="100"
            @click="arrayOfPressed[5] = !arrayOfPressed[5]"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              :stroke-width="arrayOfPressed[5] ? 10 : 3"
              fill="pink"
            />
          </svg>
        </td>
        <td>
          <img src="../assets/reset.svg" alt="reset" @click="reset" />
        </td>
      </tr>
      <tr>
        <td>
          <p>{{ arrayOfChances[3].toFixed(1) }}</p>
        </td>
        <td>
          <p>{{ arrayOfChances[4].toFixed(1) }}</p>
        </td>
        <td>
          <p>{{ arrayOfChances[5].toFixed(1) }}</p>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainStage",
  components: {},
  props: {},
  setup() {
    const arrayOfPressed = ref([false, false, false, false, false, false]);
    const arrayOfSuspects = ref([
      [true, false, false, false, false, false],
      [false, true, false, false, false, false],
      [false, false, true, false, false, false],
      [false, false, false, true, false, false],
      [false, false, false, false, true, false],
      [false, false, false, false, false, true],
    ]);
    const arrayOfChances = ref([0, 0, 0, 0, 0, 0]);

    function SameFaction(): void {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (arrayOfPressed.value[i] && arrayOfPressed.value[j] && i != j) {
            if (arrayOfSuspects.value[i][j]) {
              scanResident();
            }
          }
        }
      }
      ChanceCalc();
    }

    function OppositeFaction(): void {
      oneOf();
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (arrayOfPressed.value[i] && arrayOfPressed.value[j] && i != j) {
            arrayOfSuspects.value[i][j] = true;
          }
        }
      }
      ChanceCalc();
    }
    function ChanceCalc(): void {
      let white = 0;
      let yellow = 0;
      let green = 0;
      let blue = 0;
      let red = 0;
      let pink = 0;

      for (let i = 0; i < 6; i++) {
        if (arrayOfSuspects.value[0][i] == false) white++;
        if (arrayOfSuspects.value[1][i] == false) yellow++;
        if (arrayOfSuspects.value[2][i] == false) green++;
        if (arrayOfSuspects.value[3][i] == false) blue++;
        if (arrayOfSuspects.value[4][i] == false) red++;
        if (arrayOfSuspects.value[5][i] == false) pink++;
      }
      const sum = white + yellow + green + blue + red + pink;
      arrayOfChances.value[0] = (white / sum) * 100 * 2;
      arrayOfChances.value[1] = (yellow / sum) * 100 * 2;
      arrayOfChances.value[2] = (green / sum) * 100 * 2;
      arrayOfChances.value[3] = (blue / sum) * 100 * 2;
      arrayOfChances.value[4] = (red / sum) * 100 * 2;
      arrayOfChances.value[5] = (pink / sum) * 100 * 2;

      for (let i = 0; i < 6; i++) arrayOfPressed.value[i] = false;
    }

    function oneOf(): void {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (!arrayOfPressed.value[i] && !arrayOfPressed.value[j])
            arrayOfSuspects.value[i][j] = true;
        }
      }
      ChanceCalc();
    }
    function scanResident(): void {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (arrayOfPressed.value[i] || arrayOfPressed.value[j]) {
            arrayOfSuspects.value[i][j] = true;
          }
        }
      }
      ChanceCalc();
    }

    function scanPersonoid(): void {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (!(arrayOfPressed.value[i] || arrayOfPressed.value[j])) {
            arrayOfSuspects.value[i][j] = true;
          }
        }
      }
      ChanceCalc();
    }
    function reset(): void {
      arrayOfSuspects.value = [
        [true, false, false, false, false, false],
        [false, true, false, false, false, false],
        [false, false, true, false, false, false],
        [false, false, false, true, false, false],
        [false, false, false, false, true, false],
        [false, false, false, false, false, true],
      ];

      ChanceCalc();
    }

    return {
      oneOf,
      scanResident,
      scanPersonoid,
      reset,
      SameFaction,
      OppositeFaction,
      arrayOfSuspects,
      arrayOfPressed,
      arrayOfChances,
    };
  },
});
</script>

<style scoped>
.mainStage {
  width: 400px;
  height: 400px;
  background-color: grey;
}
button {
  height: 75px;
  width: 75px;
  padding: 1px 1px;
  border: 1px solid #ddd;
  background-color: #333333;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Arial Rounded MT Bold";
  color: whitesmoke;
}
</style>
