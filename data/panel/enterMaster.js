/*
 * This Source Code is subject to the terms of the Mozilla Public License
 * version 2.0 (the "License"). You can obtain a copy of the License at
 * http://mozilla.org/MPL/2.0/.
 */

(function()
{
  "use strict";

  /*
    global $, onInit, onShow, setValidator, setActivePanel, getActivePanel,
    setCommandHandler, setSubmitHandler, setResetHandler, markInvalid,
    enforceValue, resize, messages
  */

  /* global validateMasterPassword */

  onInit(function()
  {
    setCommandHandler("reset-master-link", () => setActivePanel("change-master"));
    setCommandHandler("generate-password-link", () => setActivePanel("generate-password"));
    setCommandHandler("legacy-password-link", () => setActivePanel("legacy-password"));

    setValidator("master-password", validateMasterPassword);
    setSubmitHandler("enter-master", () => self.port.emit("checkMasterPassword", $("master-password").value.trim()));

    self.port.on("masterPasswordDeclined", () => markInvalid("master-password", messages["password-declined"]));
  });
})();
