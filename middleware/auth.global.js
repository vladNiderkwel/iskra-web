const loginRoute = "/login"
const signupRoute = "/signup"

const tutorAllowed = [
    "/",
    "/event",
    "/map",
    "/post",
    "/question",
    "/task",
    "/stats"
]

const adminAllowed = [
    "/user",
    // "/service",
]

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path == loginRoute || to.path == signupRoute) return

    const isBlocked = useCookie('staffBlocked')
    const isPasswordChanged = useCookie('staffPasswordChanged')

    if (isBlocked.value || !isPasswordChanged.value) 
        return navigateTo(loginRoute)

    const staffRole = useCookie('staffRole')

    const paths = to.path.split("/").filter(p => p)
    let route = "/"

    if (paths.length > 0) route += paths[0]

    if (tutorAllowed.includes(route)) {
        if (staffRole.value == 0 || staffRole.value == 1) return
    }
    else if (adminAllowed.includes(route)) {
        if (staffRole.value == 1) return
    }

    return navigateTo(loginRoute);
})