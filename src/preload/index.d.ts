import '@electron-toolkit/preload'

interface Shortcut {
  id: string
  command: string
}

declare global {
  interface Window {
    api: {
      on: (
        channel: string,
        listener: (...args: unknown[]) => void
      ) => () => void
      findCarThing: () => Promise<boolean>
      findSetupCarThing: () => Promise<
        'not_found' | 'not_installed' | 'ready'
      >
      installApp: () => Promise<boolean>
      startServer: () => Promise<void>
      stopServer: () => Promise<void>
      isServerStarted: () => Promise<boolean>
      forwardSocketServer: () => Promise<void>
      getVersion: () => Promise<string>
      getStorageValue: (key: string) => Promise<unknown>
      setStorageValue: (key: string, value: unknown) => Promise
      triggerCarThingStateUpdate: () => void
      uploadShortcutImage: (name: string) => Promise<string>
      removeNewShortcutImage: () => Promise<void>
      getShortcuts: () => Promise<Shortcut[]>
      addShortcut: (shortcut: Shortcut) => Promise<void>
      removeShortcut: (id: string) => Promise<void>
      updateShortcut: (shortcut: Shortcut) => Promise<void>
      isDevMode: () => Promise<boolean>
      setSpotifyToken: (token: string) => Promise<boolean>
    }
  }
}
