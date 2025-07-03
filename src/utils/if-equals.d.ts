declare type IfEquals<X, Y, A = true, B = false> = (<T>() => T extends X ? A : B) extends (<T>() => T extends Y ? A : B) ? A : B;
