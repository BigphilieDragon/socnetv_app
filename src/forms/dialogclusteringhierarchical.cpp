/**
 * @file dialogclusteringhierarchical.cpp
 * @brief Implements hierarchical clustering dialog for social network visualization and analysis.
 * @author Dimitris B. Kalamaras
 * @copyright
 *   Copyright (C) 2005-2026 by Dimitris B. Kalamaras.
 *   This file is part of SocNetV (Social Network Visualizer).
 * @license
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 or later.
 *   For more details, see <http://www.gnu.org/licenses/>.
 * @see https://socnetv.org
 */


 

#include "dialogclusteringhierarchical.h"
#include <QCoreApplication>

#include <QDebug>
#include "forms_logging.h"
#include <QPushButton>


DialogClusteringHierarchical::DialogClusteringHierarchical (QWidget *parent,
                                                            QString preselectMatrix) :
    QDialog (parent)

{
    ui.setupUi(this);

    (ui.buttonBox)->button (QDialogButtonBox::Ok)->setDefault(true);

    matrixList << QCoreApplication::translate("SocNetV", "Adjacency")
               << QCoreApplication::translate("SocNetV", "Distances");

    measureList << tr("None, use raw input matrix")
                << tr("Jaccard distance")
                << tr("Hamming distance")
                << tr("Euclidean distance")
                << tr("Manhattan distance");


    linkageList << tr("Single-linkage (minimum)")
                << tr("Complete-linkage (maximum)")
                << tr("Average-linkage (WPGMA)")
                << tr("Average-linkage (UPGMA)");

    variablesLocationList
            << QCoreApplication::translate("SocNetV", "Rows")
            << QCoreApplication::translate("SocNetV", "Columns")
            << QCoreApplication::translate("SocNetV", "Both");

    ui.variablesLocationSelect->insertItems( 1, variablesLocationList );
    ui.variablesLocationSelect->setCurrentIndex(2);

    ui.matrixSelect->insertItems( 1, matrixList );
    if (preselectMatrix == QCoreApplication::translate("SocNetV", "Distances")) {
        ui.matrixSelect->setCurrentIndex(1);
    }

    ui.metricSelect->insertItems(1, measureList);
    ui.metricSelect->setCurrentIndex(3);

    ui.linkageSelect->insertItems( 1, linkageList );

    ui.linkageSelect->setCurrentIndex(2);

    ui.diagonalCheckBox->setChecked(false);

    ui.diagramCheckBox->setChecked(true);

    connect ( ui.matrixSelect, SIGNAL(textHighlighted(QString)),
              this, SLOT(matrixChanged(QString)) );


}


void DialogClusteringHierarchical::matrixChanged(const QString &matrix) {
    qCDebug(lcForms)<< "DialogClusteringHierarchical::matrixChanged()"
            << matrix;
}

/**
 * @brief Gets user choices
 */
void DialogClusteringHierarchical::getUserChoices(){
    qCDebug(lcForms)<< "DialogClusteringHierarchical::getUserChoices!...";

    QString matrix = ui.matrixSelect->currentText();

    QString varLocation = ui.variablesLocationSelect->currentText();

    QString metric= (( ui.metricSelect->isEnabled() ) ?
                                    ui.metricSelect->currentText()  :
                                    "-" );

    QString linkage = ui.linkageSelect->currentText();

    bool diagonal = ui.diagonalCheckBox->isChecked();

    bool diagram = ui.diagramCheckBox->isChecked();

    qCDebug(lcForms)<< "DialogClusteringHierarchical: user selected: "
            << matrix
            << metric
            << linkage;
    emit userChoices( matrix, varLocation, metric, linkage,diagonal, diagram );
}


void DialogClusteringHierarchical::on_buttonBox_accepted()
{
    this->getUserChoices();
    this->accept();
}

void DialogClusteringHierarchical::on_buttonBox_rejected()
{
    this->reject();
}

DialogClusteringHierarchical::~DialogClusteringHierarchical(){
     matrixList.clear();
     measureList.clear();
     linkageList.clear();
}
