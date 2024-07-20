'use client'

import React from "react";
import SelectPrimitive from "react-select";
const styleSelect = {
    valueContainer: (base, props) => ({
        ...base,
        webkitBoxFlexWrap: "nowrap",
        webkitFlexWrap: "nowrap",
        msFlexWrap: "nowrap",
        flexWrap: "nowrap",
        padding: '0',
    }),
    Input: (base) => ({
        ...base,
        display: 'hidden'
    }),
    control: (base) => ({
        // ...base,
        WebkitAlignItems: 'center',
        WebkitBoxAlign: 'center',
        msFlexAlign: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        display: '-webkit-box',
        display: '-webkit-flex',
        display: '-ms-flexbox',
        display: 'flex',
        WebkitBoxFlexWrap: 'wrap',
        WebkitFlexWrap: 'wrap',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
        WebkitBoxPack: 'justify',
        WebkitJustifyContent: 'space-between',
        justifyContent: 'space-between',
        minHeight: '38px',
        outline: '0 !important',
        position: 'relative',
        WebkitTransition: 'all 100ms',
        transition: 'all 100ms',
        borderColor: 'hsl(0, 0%, 80%)',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxSizing: 'border-box',
        width: '100%'
    }),
    container: (base) => ({
        ...base,
        width: "100%",
    }),
    menu: (base) => ({ 
        top: '100%',
        position: 'absolute',
        width: '100%',
        zIndex: '1',
        backgroundColor: 'rgba(255, 255, 255, 60%)',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
        marginBottom: '8px',
        marginTop: '1px',
        boxSizing: 'border-box',
    }), // Максимальная высота списка
    MenuList: (base) => ({ 
        // ...base, 
        cursor: 'pointer' 
    }), // Добавляем прокрутку, если список превысил максимальную высоту
    Listbox: (base) => ({
        cursor: 'pointer'
    }),
    option: (base) => ({
        ...base,
        // fontSize: '0.75rem',
        cursor: 'pointer'

    })
}

const Select = React.forwardRef(({ items, disabled, className,variant, size, type, ...props }, ref) => {

    return (
        <SelectPrimitive
            className={className}
            options={items}
            // components={valueComponents}
            hideSelectedOptions={false} // Показываем выбранные опции в списке
            styles={styleSelect}
            ref={ref} {...props}
            isSearchable={false}
            isDisabled={disabled}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'gray', // то на что навели в select 
                  primary: 'black',  // то что выбрали в select
                  neutral80: 'black' // текст и наведение 
                //   primary50: 'red' // то на что нажали
                //   neutral0: 'pink' // выбранный в select
                //   neutral50: 'red' // placeholder
                //   neutral20: 'red' // стрелка и полоска 
                },
              })}
        />);
});
Select.displayName = SelectPrimitive.displayName;

export { Select };



