<template>
    <div class="cards">
        <div class="line"></div>
        <h1 class="title">Вам подходит 375 вариантов</h1>
    </div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss'>
@import "/src/app/styles/media-queries.scss";
@import "/src/app/styles/variables.scss";

.cards {
    display: flex;
    flex-direction: column;

    @include media-xlarge {
        padding-top: 120px;
    }

    @include media-large {
        padding-top: 100px;
    }

    @include media-medium {
        padding-top: 80px;
    }

    @include media-small {
        padding-top: 60px;
    }
}

.line {
    width: 100%;
    height: 1px;
    background-color: #DEDEDE;
    margin-bottom: 40px;

    @include media-small {
        margin-bottom: 32px;
    }
}

.title {
    margin-bottom: 80px;
    font-family: "Averta_Cyrillic_SemiBold";
    font-size: 42px;
    line-height: 42px;
    color: $black-color;

    @include media-medium {
        font-size: 32px;
        line-height: 32px;
    }

    @include media-small {
        margin-bottom: 60px;
        font-size: 28px;
        line-height: 30.8px;
    }
}
</style>