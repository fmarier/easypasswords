/*
 * This Source Code is subject to the terms of the Mozilla Public License
 * version 2.0 (the "License"). You can obtain a copy of the License at
 * http://mozilla.org/MPL/2.0/.
 */

(function(global)
{
  "use strict";

  /*
    global $, onInit, onShow, setValidator, setActivePanel, getActivePanel,
    setCommandHandler, setSubmitHandler, setResetHandler, markInvalid,
    enforceValue, resize, messages
  */

  onInit(function()
  {
    setValidator("new-master", validateMasterPassword);
    setValidator("new-master-repeat", validateMasterPasswordRepeat);

    setSubmitHandler("change-master", () => self.port.emit("changeMasterPassword", $("new-master").value.trim()));
    setResetHandler("change-master", () => setActivePanel("enter-master"));
  });

  onShow(function({masterPasswordState})
  {
    $("new-master-message").hidden = masterPasswordState != "unset";
    $("reset-master-message").hidden = masterPasswordState == "unset";
    $("reset-master-cancel").hidden = masterPasswordState == "unset";
  });

  function validateMasterPassword(element)
  {
    let value = element.value.trim();
    if (value.length < 6)
      return messages["password-too-short"];

    return null;
  }
  global.validateMasterPassword = validateMasterPassword;

  function validateMasterPasswordRepeat(element)
  {
    let value = element.value.trim();
    if (value != $("new-master").value.trim())
      return messages["passwords-differ"];

    return null;
  }
})(this);
