/*
 * This Source Code is subject to the terms of the Mozilla Public License
 * version 2.0 (the "License"). You can obtain a copy of the License at
 * http://mozilla.org/MPL/2.0/.
 */

"use strict";

/* global chrome */

window.addEventListener("DOMContentLoaded", function()
{
  let elements = document.querySelectorAll("[data-l10n-id]");
  for (let i = 0; i < elements.length; i++)
  {
    let element = elements[i];
    let id = element.getAttribute("data-l10n-id").replace(/-/g, "_");
    element.textContent = chrome.i18n.getMessage(id);
  }
});
