const routes= {
// Paginas
    home: "/",
    login: "/sign-in",
    identidy: "/valideIdentidy",
    changePassword: "/recover",
    chapter: "/chapter",
    chapterId: "/chapter/:chapterId",
    notFound: "*",

// Secciones 
    seccionInicio: "#inicio",
    seccionQuienesSomos: "#quienes-somos",
    seccionCapitulos: "#capitulos",
    seccionEquipo: "#equipo",
    seccionComentarios: "#comentarios",

// Rutas Admin
    admin: "/dashport",
    adminId: "/dashport/:dashportPage",
    adminUser: "/dashport/user",
    adminMember: "/dashport/member",
    AdminChapter: "/dashport/chapter",
    AdminMessage: "/dashport/message"
    // dashportHome: "/DashportHome",
}

export default routes;
