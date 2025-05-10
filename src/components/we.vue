<template>
    <div class="we" id="we">
        <h3 style="text-align: center; font-size: 30px; max-width:1920px ; width: 100%;">Почему именно моя команда</h3>
        <div class="module-handeler">
            <div class="module">
                <span>
                    <i class="pi pi-calendar-clock"></i>
                </span>
                <h2>
                    Выполним все в поставленные сроки
                </h2>
            </div>
            <div class="module">
                <span>
                    <i class="pi pi-star"></i>
                </span>
                <h2>
                    Мы гарантируем качество работы
                </h2>
            </div>
            <div class="module">
                <span>
                    <i class="pi pi-pencil"></i>
                </span>
                <h2>
                    Предоставляем вам индивидуальный подход, к вашей задаче
                </h2>
            </div>
            <div class="module">
                <span>
                    <i class="pi pi-wallet"></i>
                </span>
                <h2>
                    Честная ценовая политика, вы точно будете знать, за что платите
                </h2>
            </div>
           
        </div>

        <div class="more_module">
                <img src="../assets/img/pech3.jpg" alt="" style="width: 100%;">
            </div>
    </div>

</template>


<style scoped>
.we {
    background-color: var(--subcolor);
    height: 700px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
}
.module {
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 140px;
    width: 650px;
}
.module >span{
border-radius: 50%;
text-align: center;
align-content: center;
    width: 100px;
    height: 100px;
    background-color: var(--maincolor);
    display: block;
    font-size: 30px;
}
.module>h2{
    font-family: sturkopf;
    width: 500px;
    text-align: justify;
    font-size: 35px;
}
.module-handeler{
    width: 600px;
    max-width: 700px;
}
.more_module {
    display: flex;
    background-color: var(--maincolor);
    max-width: 600px;
    max-height: 500px;
    height: 100%;
    width: 100%;
    transition: .5s;
    }
@media (max-width:1300px) {
    .more_module {
    display: none;
    }
    .module-handeler{
        width: 700px;
    }
    .module{
        width: 700px;
    }
    .module>h2{
        width: 580px;
    }
    
}
</style>