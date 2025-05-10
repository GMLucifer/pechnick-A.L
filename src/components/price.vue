<template>
    <div class="price_block" id="price">
      <h3 style="text-align: center; font-size: 30px; max-width:1920px ; width: 100%;">Расценки</h3>
      <div>
        <div id="app">
          <!-- Основной блок -->
          <TransitionGroup name="stagger">
            <div 
              v-for="block in blocks" 
              :key="block.id" 
              v-show="visibleBlocks.includes(block.id)"
              class="sub-block"
            >
              <h3>{{ block.title }}</h3>
              <span class="moneyType">{{ block.price }}</span>
            </div>
          </TransitionGroup>
        </div>
      </div>
      <span style=" display: flex; flex-direction: column; align-items: center;gap: 10px;">
        <button class="showBtn" @click="toggleBlocks">{{ buttonText }}</button>
        <p style="font-size: 10px; text-align: center;">*Все цены являются примерным представлением, итоговая цена будет расчитываться при личном разговоре.*</p>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blocks: [
          { id: 1, title: 'Печь малого размера', price: 'от 150.000' },
          { id: 2, title: 'Печь среднего размера', price: 'от 300.000' },
          { id: 3, title: 'Печь большого размера', price: 'от 450.000' },
          { id: 4, title: 'Камин', price: 'от 100.000' },
          { id: 5, title: 'Кирпичная летняя кухня', price: 'от 600.000' },
          { id: 6, title: 'Домашняя печь', price: 'от 430.000' },
        ],
        visibleBlocks: [1, 2, 3],
        showAll: false,
      };
    },
    computed: {
      buttonText() {
        return this.visibleBlocks.length === 3 ? 'Показать все' : 'Скрыть';
      }
    },
    methods: {
      toggleBlocks() {
        if (this.visibleBlocks.length === 3) {
          this.showAll = true;
          this.showBlocksSequentially();
        } else {
          this.visibleBlocks = [1, 2, 3];
          this.showAll = false;
        }
      },
      showBlocksSequentially() {
        let delay = 0;
        const hiddenBlocks = [4, 5, 6];
        hiddenBlocks.forEach((blockId) => {
          setTimeout(() => {
            this.visibleBlocks.push(blockId);
          }, delay);
          delay += 500; // Задержка между появлениями
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .price_block {
    padding: 30px;
    background-color: var(--maincolor);
    height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .main-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #app{
    max-width: 1280px;
    min-width: 768px;
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }
  .sub-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 10px;
    margin: 5px;
    border: 1px solid var(--textcolor);
    background-color: var(--subcolor);
    max-width: 1280px;
  }
  
  .showBtn {
    margin-top: 10px;
    border: 1px solid var(--textcolor);
    height: 30px;
    width: 150px;
    font-family: Oldtimer;
    background-color: var(--subcolor);
    transition: .4s linear;
  }
  
  .moneyType::after {
    content: '₽';
  }
  
  .stagger-enter-active,
  .stagger-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  
  .stagger-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .stagger-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  
  .stagger-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  
  .stagger-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  </style>