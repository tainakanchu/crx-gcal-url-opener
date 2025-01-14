import { Container, Typography } from "@mui/material";
import { URL_PRIVACY_POLICY, PACKAGE_VERSION } from "../constants";
import { useI18n } from "../hooks/useI18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <Container component="footer">
      <Typography variant="body2">
        Edition of {t("author")} |{" "}
        <span data-testid="app-version">{t("version", [PACKAGE_VERSION])}</span>{" "}
        |{" "}
        <a href={URL_PRIVACY_POLICY} target="_blank" rel="noopener">
          {t("privacyPolicy")}
        </a>
      </Typography>
      <Typography variant="body2">
        Thanks to original author: &copy; {t("originalAuthor")}
      </Typography>
    </Container>
  );
}
