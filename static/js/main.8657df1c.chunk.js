(this["webpackJsonpimbd-clone"]=this["webpackJsonpimbd-clone"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),r=n.n(a),o=n(6),s=n(2),d=(n(12),n(0)),l=function(e){var t=e.setQuery,n=e.getByTitle,c=e.query,i=e.getMovies;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{onClick:i,children:"MoviesApp"}),Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(),t("")},type:"search",children:Object(d.jsx)("input",{onChange:function(e){t(e.target.value)},type:"text",value:c,placeholder:"Search..."})})]})},u=(n(14),function(e){var t=e.image,n=e.title,c=e.rating,i=e.overview,a=e.setSectionTitle,r=e.releaseDate,o=e.clickHandler,s=e.movieId;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("div",{className:"card-head",children:Object(d.jsx)("img",{className:"card-image",onClick:function(){return o(s)},src:t,alt:n})}),Object(d.jsxs)("div",{className:"card-info",children:[Object(d.jsx)("h3",{children:n}),Object(d.jsx)("p",{className:"".concat("Upcoming"===a?"rating":c>=8?"rating green":c<8&&c>=6?"rating orange":c<6?"rating red":void 0),children:"Upcoming"===a?r:c})]}),Object(d.jsx)("div",{className:"overview",children:Object(d.jsx)("p",{children:i})})]})})}),h=(n(15),function(e){var t,n=e.moviesArray,c=e.title,i=e.clickHandler,a=e.setMovieId,r=(e.sectionTitle,e.favoritesArray);return t="Favorites"===c?r:n,Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("h1",{className:"title",children:c}),Object(d.jsx)("div",{className:"movies-container",children:t.length>0&&t.map((function(e){return Object(d.jsx)(u,{setMovieId:a,clickHandler:i,releaseDate:e.release_date,sectionTitle:c,movieId:e.id,title:e.title?e.title:e.original_name,image:e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:"https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",rating:e.vote_average,overview:e.overview},e.id)}))})]})}),j=(n(16),function(e){var t=e.tvShowsArr,n=e.getTvShowsLatest,c=e.getTVShows,i=e.getAiringToday,a=function(e){"Top Rated"===e.target.innerHTML&&n(),"Popular"===e.target.innerHTML&&c(),"Airing Today"===e.target.innerHTML&&i()};return Object(d.jsx)("div",{className:"navbar",style:{width:"400px",height:"30px"},children:t.map((function(e){return Object(d.jsx)("button",{onClick:a,className:"sort-btn",children:e},100*Math.random())}))})}),b=function(e){var t=e.sortArr,n=e.getNowPlaying,c=e.getPopular,i=e.getTopRated,a=e.getTVShows,r=e.sectionTitle,o=e.tvShowsArr,s=e.getTvShowsLatest,l=e.getAiringToday,u=e.displayFavorites,h=function(e){"Now Playing"===e.target.innerHTML&&n(),"Popular"===e.target.innerHTML&&c(),"Top Rated"===e.target.innerHTML&&i(),"TV Shows"===e.target.innerHTML&&a(),"Favorites"===e.target.innerHTML&&u()};return Object(d.jsxs)("div",{className:"nav-container",children:[Object(d.jsx)("div",{className:"navbar",children:t.map((function(e){return Object(d.jsx)("button",{onClick:h,className:"sort-btn",children:e},100*Math.random())}))}),"TV Shows"===r?Object(d.jsx)(j,{tvShowsArr:o,getTvShowsLatest:s,getTVShows:a,getAiringToday:l}):null]})},f=(n(17),function(e){var t=e.content,n=e.avatar,c=e.author;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"review-body",children:[Object(d.jsxs)("div",{className:"image-info",children:[Object(d.jsx)("img",{src:n,alt:c}),Object(d.jsx)("span",{children:c})]}),Object(d.jsx)("p",{children:t})]})})}),p=(n(18),function(e){var t=e.reviews,n=e.image,c=e.title,i=e.checkReviewsHandler;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"reviews-container",onClick:i,children:[Object(d.jsxs)("div",{className:"review",children:[Object(d.jsx)("h1",{children:c}),Object(d.jsx)("img",{src:n,alt:c})]}),t.length>0&&t.map((function(e){return Object(d.jsx)(f,{content:e.content,author:e.author,avatar:e.author_details.avatar_path?"https://image.tmdb.org/t/p/w500/"+e.author_details.avatar_path:"https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"},e.id)}))]})})}),g=(n(19),function(e){var t,n=e.getById,i=e.setClick,a=e.sectionTitle,r=e.tvShowById,o=e.reviews,l=e.addToFavorites,u=e.removeFromFavorites,h=Object(c.useState)(!1),j=Object(s.a)(h,2),b=j[0],f=j[1],g=function(e){i(!1),u(e)},v=function(){f(!b)};return t="TV Shows"===a?r:n,Object(d.jsxs)("div",{className:"popup",children:[Object(d.jsxs)("div",{onClick:g,className:"close",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsx)("img",{className:"popup-image",src:t.poster_path?"https://image.tmdb.org/t/p/w500/"+t.poster_path:"https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",alt:t.title}),Object(d.jsxs)("div",{className:"info-text",children:[Object(d.jsxs)("div",{className:"title-info",children:[Object(d.jsx)("h1",{children:t.title?t.title:t.original_name}),Object(d.jsx)("h3",{children:t.tagline})]}),Object(d.jsx)("div",{className:"genres",children:t.genres?t.genres.map((function(e){return Object(d.jsx)("p",{children:e.name},e.id)})):null}),Object(d.jsx)("p",{children:t.release_date}),Object(d.jsx)("p",{className:"overview",children:t.overview})]})]}),Object(d.jsxs)("div",{className:"cta",children:[Object(d.jsx)("a",{className:"homepage",href:t.homepage,target:"_blank",children:"Click here to watch"}),"Favorites"!==a?Object(d.jsx)("button",{onClick:function(){return function(e){i(!1),l(e)}(t)},children:"Add to favorites"}):Object(d.jsx)("button",{onClick:function(){return g(t)},children:"Remove"}),Object(d.jsx)("button",{onClick:v,children:"Reviews"}),b?Object(d.jsx)(p,{checkReviewsHandler:v,sectionTitle:a,reviews:o,image:t.backdrop_path?"https://image.tmdb.org/t/p/w500/"+t.backdrop_path:"https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",title:t.title?t.title:t.original_name}):null]})]})}),v=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),r=Object(s.a)(a,2),u=r[0],j=r[1],f=Object(c.useState)("Movies"),p=Object(s.a)(f,2),v=p[0],m=p[1],O=Object(c.useState)(!1),x=Object(s.a)(O,2),w=x[0],S=x[1],y=Object(c.useState)(464052),T=Object(s.a)(y,2),N=T[0],k=T[1],_=Object(c.useState)(85271),M=Object(s.a)(_,2),H=M[0],A=M[1],F=Object(c.useState)([]),V=Object(s.a)(F,2),B=V[0],D=V[1],C=Object(c.useState)([]),U=Object(s.a)(C,2),I=U[0],L=U[1],P=Object(c.useState)([]),R=Object(s.a)(P,2),G=R[0],q=R[1],E=Object(c.useState)([]),J=Object(s.a)(E,2),W=J[0],X=J[1],Y=function(){return fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return i(e.results),e}))},Q=Object(o.a)(W),z=function(e){localStorage.setItem("favorites",JSON.stringify(e))};return Object(c.useEffect)((function(){Y()}),[]),Object(c.useEffect)((function(){!function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US")).then((function(e){return e.json()})).then((function(e){L(e)}))}(N),function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return q(e.results)}))}(N)}),[N]),Object(c.useEffect)((function(){!function(e){fetch("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US")).then((function(e){return e.json()})).then((function(e){D(e)}))}(H),function(e){fetch("https://api.themoviedb.org/3/tv/".concat(e,"/reviews?api_key=").concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return q(e.results)}))}(H)}),[H]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"));X(e)}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{getMovies:Y,setQuery:j,getByTitle:function(){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&query=").concat(u)).then((function(e){return e.json()})).then((function(e){m("Search results"),i(e.results)}))},query:u}),Object(d.jsx)(b,{sortArr:["Now Playing","Popular","Top Rated","TV Shows","Favorites"],getNowPlaying:function(){fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US")).then((function(e){return e.json()})).then((function(e){m("Now Playing"),i(e.results)}))},getPopular:function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US")).then((function(e){return e.json()})).then((function(e){m("Popular"),i(e.results)}))},getTopRated:function(){fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US")).then((function(e){return e.json()})).then((function(e){m("Top Rated"),i(e.results)}))},getTVShows:function(){fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US")).then((function(e){return e.json()})).then((function(e){m("TV Shows"),i(e.results)}))},sectionTitle:v,tvShowsArr:["Popular","Top Rated","Airing Today"],getTvShowsLatest:function(){fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US")).then((function(e){return e.json()})).then((function(e){m("TV Shows"),i(e.results)}))},getAiringToday:function(){fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=".concat("cb159c75d1cbed3d5ed3f83ec7127e9a","&language=en-US")).then((function(e){return e.json()})).then((function(e){m("TV Shows"),i(e.results)}))},displayFavorites:function(){m("Favorites")}}),Object(d.jsx)(h,{favoritesArray:W,moviesArray:n,title:v,clickHandler:function(e){S(!w),"TV Shows"!==v?k(e):A(e)},setMovieId:k,sectionTitle:m}),w?Object(d.jsx)(g,{setClick:S,getById:I,click:w,sectionTitle:v,tvShowById:B,reviews:G,addToFavorites:function(e){Q.includes(e)||(Q=[].concat(Object(o.a)(Q),[e])),X(Q),z(Q)},removeFromFavorites:function(e){var t=W.filter((function(t){return t.id!==e.id}));X(t),z(t)}}):null]})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8657df1c.chunk.js.map