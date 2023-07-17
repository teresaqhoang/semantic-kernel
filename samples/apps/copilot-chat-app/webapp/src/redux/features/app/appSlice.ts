// Copyright (c) Microsoft. All rights reserved.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActiveUserInfo, Alert, AppState, FeatureKeys, initialState, TokenUsages } from './AppState';

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAlerts: (state: AppState, action: PayloadAction<Alert[]>) => {
            state.alerts = action.payload;
        },
        addAlert: (state: AppState, action: PayloadAction<Alert>) => {
            if (state.alerts.length === 3) {
                state.alerts.shift();
            }
            state.alerts.push(action.payload);
        },
        removeAlert: (state: AppState, action: PayloadAction<number>) => {
            state.alerts.splice(action.payload, 1);
        },
        setActiveUserInfo: (state: AppState, action: PayloadAction<ActiveUserInfo>) => {
            state.activeUserInfo = action.payload;
        },
        setFeatureFlag: (state: AppState, action: PayloadAction<FeatureKeys>) => {
            const feature = state.features[action.payload];
            state.features = {
                ...state.features,
                [action.payload]: {
                    ...feature,
                    enabled: !feature.enabled,
                },
            };
        },
        updateTokenUsage: (state: AppState, action: PayloadAction<TokenUsages>) => {
            state.tokenUsage = {
                prompt: state.tokenUsage.prompt + action.payload.prompt,
                dependency: state.tokenUsage.dependency + action.payload.dependency,
                planExecution: state.tokenUsage.planExecution + action.payload.planExecution,
            };
        },
    },
});

export const { addAlert, removeAlert, setAlerts, setActiveUserInfo, setFeatureFlag, updateTokenUsage } =
    appSlice.actions;

export default appSlice.reducer;
