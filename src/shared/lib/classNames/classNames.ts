<<<<<<< HEAD
type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
=======
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
>>>>>>> main
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
<<<<<<< HEAD
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
=======
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
>>>>>>> main
}
