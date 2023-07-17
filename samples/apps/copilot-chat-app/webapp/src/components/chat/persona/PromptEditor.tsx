// Copyright (c) Microsoft. All rights reserved.

import { Button, Popover, PopoverSurface, PopoverTrigger, Textarea, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import React from 'react';
import { Info16 } from '../../shared/BundledIcons';

const useClasses = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    horizontal: {
        display: 'flex',
        ...shorthands.gap(tokens.spacingVerticalSNudge),
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap(tokens.spacingHorizontalS),
        paddingBottom: tokens.spacingHorizontalM,
    },
    popover: {
        width: '300px',
    },
    header: {
        marginBlockEnd: tokens.spacingHorizontalM,
    },
});

interface PromptEditorProps {
    title: string;
    isEditable: boolean;
    info: string;
}

export const PromptEditor: React.FC<PromptEditorProps> = ({
    title,
    isEditable,
    info,
}) => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <div className={classes.horizontal}>
                <h3>{title}</h3>
                <Popover withArrow>
                        <PopoverTrigger disableButtonEnhancement>
                            <Button icon={<Info16 />} appearance="transparent" />
                        </PopoverTrigger>
                        <PopoverSurface>
                            {info}
                        </PopoverSurface>
                    </Popover>
            </div>
            <Textarea
                resize="vertical"
                disabled={!isEditable}
            />
        </div>
    );
};
