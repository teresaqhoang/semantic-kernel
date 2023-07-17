// Copyright (c) Microsoft. All rights reserved.

import {
    makeStyles,
    shorthands,
    tokens
} from '@fluentui/react-components';
import * as React from 'react';
import { SharedStyles } from '../../styles';
import { MemoryBiasSlider } from './persona/MemoryBiasSlider';
import { PromptEditor } from './persona/PromptEditor';

const useClasses = makeStyles({
    root: {
        ...shorthands.margin(tokens.spacingVerticalM, tokens.spacingHorizontalM),
        ...SharedStyles.scroll,
    },
});

export const ChatPersona: React.FC = () => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <h2>Persona</h2>
            <PromptEditor
                title="Meta Prompt"
                isEditable={false}
                info="The prompt that defines the chat bot's persona."
            />
            <PromptEditor
                title="Short Term Memory"
                isEditable={false}
                info="We maintain a summary of the most recent N chat exchanges."
            />
            <PromptEditor
                title="Long Term Memory"
                isEditable={false}
                info="We maintain a summary of the least recent N chat exchanges."
            />
            <MemoryBiasSlider />
        </div>
    );
};