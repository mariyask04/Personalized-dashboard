import {
  test,
  expect,
} from "@playwright/test";

test(
  "search input works",
  async ({ page }) => {

    await page.goto(
      "http://localhost:3000"
    );

    const searchInput =
      page.locator("input");

    await expect(
      searchInput
    ).toBeVisible();

    await searchInput.fill("AI");

    await expect(
      searchInput
    ).toHaveValue("AI");
  }
);