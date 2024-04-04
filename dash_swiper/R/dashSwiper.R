# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashSwiper <- function(id=NULL, autoplay=NULL, className=NULL, loop=NULL, navigation=NULL, nextButton=NULL, pagination=NULL, prevButton=NULL, shader=NULL, slides=NULL, speed=NULL, swiperOptions=NULL) {
    
    props <- list(id=id, autoplay=autoplay, className=className, loop=loop, navigation=navigation, nextButton=nextButton, pagination=pagination, prevButton=prevButton, shader=shader, slides=slides, speed=speed, swiperOptions=swiperOptions)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashSwiper',
        namespace = 'dash_swiper',
        propNames = c('id', 'autoplay', 'className', 'loop', 'navigation', 'nextButton', 'pagination', 'prevButton', 'shader', 'slides', 'speed', 'swiperOptions'),
        package = 'dashSwiper'
        )

    structure(component, class = c('dash_component', 'list'))
}
