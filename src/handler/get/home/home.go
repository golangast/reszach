package home

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func Home(c echo.Context) error {

	var d = "dave"

	return c.Render(http.StatusOK, "home.html", d)
}
