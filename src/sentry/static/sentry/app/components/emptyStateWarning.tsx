import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import EmptyMessage from 'app/views/settings/components/emptyMessage';
import {IconWarning} from 'app/icons';
import SvgIcon from 'app/icons/svgIcon';
import space from 'app/styles/space';

type Props = {
  small?: boolean;
  children?: React.ReactNode;
  icon?: boolean | typeof SvgIcon;
  className?: string;
};

/**
 * This component differs from the EmptyMessage in that it specializes for empty
 * states where something is problematic.
 *
 * e.g. A users search has resulted in no entries, nothing matches a users
 * filter
 *
 * This should NOT be used as an empty state for no items, or when an inbox is
 * empty (a good thing).
 */
const EmptyStateWarning = ({small = false, icon = true, children, className}: Props) =>
  small ? (
    <EmptyMessage className={className}>
      <SmallMessage>
        {icon ? <IconWarning color="gray500" size="lg" /> : icon}
        {children}
      </SmallMessage>
    </EmptyMessage>
  ) : (
    <EmptyMessage
      icon={icon ? <IconWarning size="48" color="gray400" /> : icon}
      data-test-id="empty-state"
      description={children}
      className={className}
    />
  );

EmptyStateWarning.propTypes = {
  small: PropTypes.bool,
};

const SmallMessage = styled('div')`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-gap: ${space(1)};
  align-items: center;
  color: ${p => p.theme.gray500};
  font-size: ${p => p.theme.fontSizeExtraLarge};
  line-height: 1em;
`;

export default EmptyStateWarning;
