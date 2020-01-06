/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name SimpleContacts
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { @ionic-native/SimpleContacts } from '@ionic-native/simple-contacts';
 *
 *
 * constructor(private SimpleContacts: SimpleContacts) { }
 *
 * ...
 *
 *
 * this.SimpleContacts.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'SimpleContacts',
  plugin: 'cordova-plugin-simple-contacts', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.SimpleContacts', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class SimpleContacts extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    successIndex : 1,
    errorIndex : 2
  })
  getAllContacts(arg0: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  echo(arg0: string, success: (cb: any) => any, error: (cb: any) => any): void {
    return;
  }

}
