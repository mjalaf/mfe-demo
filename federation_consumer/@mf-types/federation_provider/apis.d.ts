
    export type RemoteKeys = 'federation_provider/astronauts';
    type PackageType<T> = T extends 'federation_provider/astronauts' ? typeof import('federation_provider/astronauts') :any;