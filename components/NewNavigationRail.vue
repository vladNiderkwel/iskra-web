<template>
    <ul class="list-none flex flex-col navigation-new">
        <li class="flex">
            <NuxtLink class="w-fit !p-2 mx-auto" to="/">
                <svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 31C20.609 34.6091 22.6551 42.9072 23.5141 47.2449C23.604 47.6986 24.396 47.6986 24.4859 47.2449C25.3449 42.9072 27.3909 34.6091 31 31C34.609 27.3909 42.9072 25.3449 47.2448 24.4859C47.6986 24.396 47.6986 23.604 47.2448 23.5141C42.9072 22.6551 34.609 20.6091 31 17C27.3909 13.3909 25.3449 5.09275 24.4859 0.75515C24.396 0.301405 23.604 0.301403 23.5141 0.755147C22.6551 5.09275 20.609 13.3909 17 17C13.3909 20.6091 5.09274 22.6551 0.755147 23.5141C0.301402 23.604 0.301404 24.396 0.755149 24.4859C5.09275 25.3449 13.3909 27.3909 17 31Z"/>
                </svg>
            </NuxtLink>
        </li>
        <li class="mt-auto mb-2">
            <NuxtLink class="mx-auto w-fit" to="/user">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/>
                </svg>
            </NuxtLink>
            <p class="w-fit mx-auto">Пользователи</p>
        </li>
        <li class="my-2">
            <NuxtLink class="mx-auto w-fit" to="/map">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/>
                </svg>
            </NuxtLink>
            <p class="w-fit mx-auto">Карта</p>
        </li>
        <li class="my-2">
            <NuxtLink class="mx-auto w-fit" to="/event">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                </svg>
            </NuxtLink>
            <p class="w-fit mx-auto">Мероприятия</p>
        </li>
        <li class="my-2">
            <NuxtLink class="mx-auto w-fit" to="/question">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M476-280q21 0 35.5-14.5T526-330q0-21-14.5-35.5T476-380q-21 0-35.5 14.5T426-330q0 21 14.5 35.5T476-280Zm-36-154h74q0-17 1.5-29t6.5-23q5-11 12.5-20.5T556-530q35-35 49.5-58.5T620-642q0-53-36-85.5T487-760q-55 0-93.5 27T340-658l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-17 14-27.5 27.5T453-505q-7 15-10 31.5t-3 39.5Zm40 394L360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600L480-40ZM200-240h192l88 88 88-88h192v-560H200v560Zm280-280Z"/>
                </svg>
            </NuxtLink>
            <p class="w-fit mx-auto">Вопросы</p>
        </li>
        <li class="my-2">
            <NuxtLink class="mx-auto w-fit" to="/task">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/>
                </svg>
            </NuxtLink>
            <p class="w-fit mx-auto">Задания</p>
        </li>
        <li class="my-2">
            <NuxtLink class="mx-auto w-fit" to="/service">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm0-240q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm0-240q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640ZM480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm40 240v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
                </svg>
            </NuxtLink>
            <p class="w-fit mx-auto">Сервисы</p>
        </li>
        <li class="mt-2">
            <NuxtLink class="mx-auto w-fit" to="/post">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                </svg>
            </NuxtLink>
            <p class="w-fit mx-auto">Посты</p>
        </li>
        <li class="mt-auto">
            <NuxtLink class="mx-auto w-fit" to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                </svg>
            </NuxtLink>
            <p class="w-fit mx-auto">Выход</p>
        </li>
    </ul>
</template>

<style scoped>
    .navigation-new {
        width: min-content;
        border-radius: 16px;
        padding: 8px;
        margin: 8px;

        font-size: 14px;
        /*background: var(--iskra-primary-container);*/
    }

    .navigation-new li a {
        display: flex;
        padding: 4px 16px;
        border-radius: 9999px;

        transition: all 0.2s;

        color: var(--iskra-on-primary-container);
        fill: var(--iskra-on-primary-container);
    }

    .navigation-new li a:hover {
        background: var(--iskra-primary-transparent);
        stroke-width: 0;
        cursor: pointer;
    }

    .navigation-new .router-link-active {
        background: var(--iskra-primary-container);
    }
</style>