package routes

import "handler/get/home"

func Routes(e *echo.Echo) {
	e.GET("/", home.Home)

}
