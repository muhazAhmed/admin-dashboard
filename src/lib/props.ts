interface TooltipProps {
    tooltipText: string;
    children: any;
}

interface NavbarProps {
    children: any;
}

interface CardProps {
    children: any;
    className?: string;
    id?: string;
    style?: any;
}

export type {
    TooltipProps,
    NavbarProps,
    CardProps
}