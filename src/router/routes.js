function loadPage(component){
    return () => import(`@/pages/${component}.vue`)
}


export default [
    {path: '/', component: loadPage('Home')},
    {path: '/info', component: loadPage('Info')},
    {path: '/create', component: loadPage("Create")},
    {path: '/lobby', component: loadPage("Lobby")},
    {path: '/game', component: loadPage("Game")},
    {path: '/sharelink/:lobbyID', component: loadPage("Share")},
]