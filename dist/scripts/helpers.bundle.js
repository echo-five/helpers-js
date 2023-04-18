/*!
 * Echo-Five Helpers JS (jQuery).
 * @author Matthieu Roy
 *
 * LICENCE.
 * Licensed under the MIT License.
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://github.com/echo-five/helpers-js/blob/master/LICENSE
 *
 * WARRANTIES.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function ($) {

  /**
   * Cookie - Delete a cookie.
   *
   * @type {jQuery.Function}
   *
   * @return {jQuery}
   */
  $.fn.efFoo = function () {
    console.log('efFoo');
    return this;
  };

})(jQuery);


/*!
 * Echo-Five Helpers JS.
 * @author Matthieu Roy
 *
 * LICENCE.
 * Licensed under the MIT License.
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://github.com/echo-five/helpers-js/blob/master/LICENSE
 *
 * WARRANTIES.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Cookie - Delete a cookie.
 *
 * @type {function}
 *
 * @return void
 */
function eFCookieDel() {
  console.log('eFCookieDel');
}

/**
 * Cookie - Get a cookie value.
 *
 * @type {function}
 *
 * @return void
 */
function eFCookieGet() {
  console.log('eFCookieGet');
}

/**
 * Cookie - Set a cookie.
 *
 * @type {function}
 *
 * @return void
 */
function eFCookieSet() {
  console.log('eFCookieSet');
}

/**
 * Local storage - Clear the local storage.
 *
 * @type {function}
 *
 * @return void
 */
function efLocalStorageClear() {
  localStorage.clear();
}

/**
 * Local storage - Delete a local storage item.
 *
 * @type {function}
 *
 * @param {string} key
 *  The item key.
 *
 * @return void
 */
function efLocalStorageDelItem(key) {
  localStorage.removeItem(key);
}

/**
 * Local storage - Get a local storage item value.
 *
 * @type {function}
 *
 * @param {string} key
 *  The item key.
 *
 * @return {string | null}
 *  The item value.
 */
function efLocalStorageGetItem(key) {
  return localStorage.getItem(key);
}

/**
 * Local storage - Set a local storage item value.
 *
 * @type {function}
 *
 * @param {string} key
 *  The item key.
 *  @param {string} value
 *  The item value.
 *
 * @return {string | null}
 *  The item value.
 */
function efLocalStorageSetItem(key, value) {
  localStorage.setItem(key, value);
  return value;
}

/**
 * Session storage - Clear the session storage.
 *
 * @type {function}
 *
 * @return void
 */
function efSessionStorageClear() {
  sessionStorage.clear();
}

/**
 * Session storage - Delete a session storage item.
 *
 * @type {function}
 *
 * @param {string} key
 *  The item key.
 *
 * @return void
 */
function efSessionStorageDelItem(key) {
  sessionStorage.removeItem(key);
}

/**
 * Session storage - Get a session storage item value.
 *
 * @type {function}
 *
 * @param {string} key
 *  The item key.
 *
 * @return {string | null}
 *  The item value.
 */
function efSessionStorageGetItem(key) {
  return sessionStorage.getItem(key);
}

/**
 * Session storage - Set a session storage item value.
 *
 * @type {function}
 *
 * @param {string} key
 *  The item key.
 *  @param {string} value
 *  The item value.
 *
 * @return {string | null}
 *  The item value.
 */
function efSessionStorageSetItem(key, value) {
  sessionStorage.setItem(key, value);
  return value;
}
