import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export class SmartlookSetupConfig {
  private smartlookAPIKey: string;
  private fps: number;

  constructor(smartlookAPIKey: string, fps?: number) {
    this.smartlookAPIKey = smartlookAPIKey;
    this.fps = fps;
  }
}

export class SmartlookUserIdentifier {
  private identifier: string;
  private sessionProperties: {};

  constructor(identifier: string, sessionProperties?: {}) {
    this.identifier = identifier;
    this.sessionProperties = sessionProperties;
  }
}

export class SmartlookCustomEvent {
  private name: string;
  private eventProperties: {};

  constructor(name: string, eventProperties?: {}) {
    this.name = name;
    this.eventProperties = eventProperties;
  }
}

export class SmartlookGlobalEventProperties {
  private globalEventProperties: {};
  private immutable: boolean;

  constructor(globalEventProperties: {}, immutable: boolean) {
    this.globalEventProperties = globalEventProperties;
    this.immutable = immutable;
  }
}

export class SmartlookGlobalEventProperty {
  private key: string;
  private value: string;
  private immutable: boolean;

  constructor(key: string, value: string, immutable: boolean) {
    this.key = key;
    this.value = value;
    this.immutable = immutable;
  }
}

export class SmartlookGlobalEventPropertyKey {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }
}

/**
 * @name Smartlook
 * @description
 * Official Smartlook SDK plugin. For more information visit (www.smartlook.com).
 *
 * @usage
 * ```typescript
 * import { Smartlook } from '@ionic-native/smartlook/ngx';
 *
 *
 * constructor(private smartlook: Smartlook) { }
 *
 * ...
 *
 *
 * this.smartlook.setupAndStartRecording(new SmartlookSetupConfig("key"));
 *
 * ```
 * @classes
 * SmartlookSetupConfig
 * SmartlookUserIdentifier
 * SmartlookCustomEvent
 * SmartlookGlobalEventProperties
 * SmartlookGlobalEventProperty
 * SmartlookGlobalEventPropertyKey
 */
@Plugin({
  pluginName: 'Smartlook',
  plugin: 'https://github.com/smartlook/cordova-smartlook.git',
  pluginRef: 'cordova.plugins.SmartlookPlugin',
  repo: 'https://github.com/smartlook/cordova-smartlook.git',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Smartlook extends IonicNativePlugin {

  /**
   * Setup and start Smartlook SDK recording.
   * @param config SmartlookSetupConfig object.
   * @param config.smartlookAPIKey (required) Smartlook API key (you can obtain it in your dashboard).
   * @param config.fps (optional) recorded video framerate (allowed values 2-10 fps).
   */
  @Cordova({ sync: true })
  setupAndStartRecording(config: SmartlookSetupConfig): void {
    return;
  }

  /**
   * Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see start())
   * @param config SmartlookSetupConfig object.
   * @param config.smartlookAPIKey (required) Smartlook API key (you can obtain it in your dashboard).
   * @param config.fps (optional) recorded video framerate (allowed values 2-10 fps).
   */
  @Cordova({ sync: true })
  setup(config: SmartlookSetupConfig): void {
    return;
  }

  /**
   * Start SDK recording.
   */
  @Cordova({ sync: true })
  startRecording(): void {
    return;
  }

  /**
   * Stop SDK recording. Recording will start again when you call start().
   */
  @Cordova({ sync: true })
  stopRecording(): void {
    return;
  }

  /**
   * Check if SDK is currently recording.
   * @return {Promise<boolean>} Returns a promise with isRecording boolean.
   */
  @Cordova()
  isRecording(): Promise<boolean> {
    return;
  }

  /**
   * When you start sensitive mode SDK records blank videos (single color) but SDK still sends analytic events.
   */
  @Cordova({ sync: true })
  startFullscreenSensitiveMode(): void {
    return;
  }

  /**
   * Stop sensitive mode -> SDK records video.
   */
  @Cordova({ sync: true })
  stopFullscreenSensitiveMode(): void {
    return;
  }

  /**
   * Check if fullscreen sensitive mode is active.
   * @return {Promise<boolean>} Returns a promise with isFullscreenSensitiveModeActive boolean.
   */
  @Cordova()
  isFullscreenSensitiveModeActive(): Promise<boolean> {
    return;
  }

  /**
   * Identify user.
   * @param identifier SmartlookUserIdentifier object.
   * @param identifier.idenfier (required) id that can be used to identify user and his records.
   *                            You will see this Id in Smartlook dashboard so you can pair records with concrete user.
   * @param identifier.sessionProperties (optional) custom session properties object.
   */
  @Cordova({ sync: true })
  setUserIdentifier(identifier: SmartlookUserIdentifier): void {
    return;
  }

  /**
   * Track custom event.
   * @param event SmartlookCustomEvent object.
   * @param event.name (required) string used to identify event.
   * @param event.eventProperties (optional) event properties object.
   */
  @Cordova({ sync: true })
  trackCustomEvent(event: SmartlookCustomEvent): void {
    return;
  }

  /**
   * Track custom event.
   * @param timedEvent SmartlookCustomEvent object.
   * @param timedEvent.name (required) string used to identify timed event.
   * @param timedEvent.eventProperties (optional) timed event properties object. These properties will
   *                                   be merged with properties of tracked event (with lower priority).
   */
  @Cordova({ sync: true })
  startTimedCustomEvent(timedEvent: SmartlookCustomEvent): void {
    return;
  }

  /**
   * Set global event properties that will be added to every tracked event.
   * @param properties SmartlookGlobalEventProperties object.
   * @param properties.globalEventProperties (required) global event properties object.
   * @param properties.immutable (required) If set to TRUE these properties have higher priority
   *                              than mutable ones and also they cannot be changed (only removed).
   */
  @Cordova({ sync: true })
  setGlobalEventProperties(properties: SmartlookGlobalEventProperties): void {
    return;
  }

  /**
   * Check if SDK is currently recording.
   * @param property SmartlookGlobalEventProperty object.
   * @param property.key global property key.
   * @param property.value global property value.
   * @param property.immutable (required) If set to TRUE these properties have higher priority
   *                           than mutable ones and also they cannot be changed (only removed).
   */
  @Cordova({ sync: true })
  setGlobalEventProperty(property: SmartlookGlobalEventProperty): void {
    return;
  }

  /**
   * Remove property from global event properties.
   * @param property SmartlookGlobalEventPropertyKey object.
   * @param property.key global property key.
   */
  @Cordova({ sync: true })
  removeGlobalEventProperty(property: SmartlookGlobalEventPropertyKey): void {
    return;
  }

  /**
   * Remove all properties from global event properties.
   */
  @Cordova({ sync: true })
  removeAllGlobalEventProperties(): void {
    return;
  }
}
