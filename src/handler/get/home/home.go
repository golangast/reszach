package home

import "net/http"

func Home(c echo.Context) error {

	var d = "dave"

	return c.Render(http.StatusOK, "home.html", d)
}
