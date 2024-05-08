const loginRoute = "/login"

const tutorAllowed = [
    "/",
    "/events",
    "/map",
    "/post",
    "/question",
    "/task",
    "/stats"
]

const adminAllowed = [
    "/user",
    "/service",
]

export default defineNuxtRouteMiddleware((to, from) => {
    const staffRole = useCookie('staffRole')

    const paths = to.path.split("/").filter(p => p)
    let route = "/"
/*
    if (paths.length > 0) route += paths[0]

    if (tutorAllowed.includes(route)) {
        if (staffRole.value == 0 || staffRole.value == 1) return
    }
    else if (adminAllowed.includes(route)) {
        if (staffRole.value == 1) return
    }
    else if (route == loginRoute) {
        return
    }

    return navigateTo(loginRoute);
    */
})