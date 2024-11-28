const PillColors: PillColorProps = {
  "DELETE": "danger",
  "POST": "warning",
  "GET": "success",
  "PUT": "info",
  "PATCH": "default",
  "DEFAULT": "default"
}

function getPillColor(pill: string): PillColors {

  if (PillColors[pill]) {
    return PillColors[pill]
  }

  return PillColors.DEFAULT
}

export default getPillColor

type PillColorProps = {
  [key: string]: PillColors
}