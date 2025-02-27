<script setup>
import Title from '~/components/Title.vue';

const config = useRuntimeConfig()
const { data: postViews, error: postViewsError, pending: postViewsPending, refresh: refreshPostViews } =
    await useFetch(`${config.public.baseUrl}/stats/post-views`)

const { data: eventMembers, error: eventMembersError, pending: eventMembersPending, refresh: refreshEventMembers } =
    await useFetch(`${config.public.baseUrl}/stats/event-members`)

</script>

<template>
    <div class="w-full h-full max-h-full p-2 overflow-y-scroll">
        <Title text="Статистика" />

        <div class="w-min mx-auto">
            <div class="my-4 min-w-fit">
                <Subtitle text="Самые просматриваемые посты" />

                <ButtonTonal text="Обновить" @click="refreshPostViews()" class="mx-auto my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                            d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
                    </svg>
                </ButtonTonal>

                <LoadingIndicator v-if="postViewsPending" class="mx-auto" />

                <ErrorLabel v-else-if="postViewsError" class="mx-auto" />

                <template v-else v-for="(post, index) in postViews">
                    <div class="flex my-2">
                        <NumericBadge :number="index + 1" class="mr-3" />
                        <PostViewStatsCard :post="post" />
                    </div>
                </template>

                <HorizontalDivider class="mt-8" />
            </div>

            <div class="my-4">
                <Subtitle text="Самые посещаемые события" />

                <ButtonTonal text="Обновить" @click="refreshEventMembers()" class="mx-auto my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path
                            d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
                    </svg>
                </ButtonTonal>

                <LoadingIndicator v-if="eventMembersPending" class="mx-auto" />

                <ErrorLabel v-else-if="eventMembersError" class="mx-auto" />

                <template v-else v-for="(event, index) in eventMembers">
                    <div class="flex my-2">
                        <NumericBadge :number="index + 1" class="mr-3" />
                        <EventMembersStatsCard :event="event" />
                    </div>
                </template>

                <HorizontalDivider class="mt-8" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>