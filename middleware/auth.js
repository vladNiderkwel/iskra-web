export default function ({ app, redirect }) {
    if (process.client) {
        if (!app.$auth.loggedIn) {
            redirect('/login');
        }
    }
}