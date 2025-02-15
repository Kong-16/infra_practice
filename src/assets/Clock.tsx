function Clock({ size, fill, stroke, ...props }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      {...props}
      viewBox="-1 -1 18 18"
    >
      <path
        d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"
        fill={fill}
        stroke={stroke}
      />
      <path
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
}

export default Clock;
