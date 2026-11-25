/**
 * @file dialogsimilaritypearson.cpp
 * @brief Implements the DialogSimilarityPearson class for computing Pearson correlation similarity between nodes in SocNetV.
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
 

#include "dialogsimilaritypearson.h"
#include <QCoreApplication>

#include <QDebug>
#include "forms_logging.h"
#include <QPushButton>


DialogSimilarityPearson::DialogSimilarityPearson (QWidget *parent) : QDialog (parent)
{
    ui.setupUi(this);

    (ui.buttonBox)->button (QDialogButtonBox::Ok)->setDefault(true);

    matrixList
            << QCoreApplication::translate("SocNetV", "Adjacency")
            << QCoreApplication::translate("SocNetV", "Distances");

    variablesLocationList
            << QCoreApplication::translate("SocNetV", "Rows")
            << QCoreApplication::translate("SocNetV", "Columns")
            << QCoreApplication::translate("SocNetV", "Both");

    (ui.matrixSelect)->insertItems( 1, matrixList );
    (ui.variablesLocationSelect)->insertItems( 1, variablesLocationList );
    (ui.diagonalCheckBox)->setChecked(false);

}



void DialogSimilarityPearson::getUserChoices(){
    qCDebug(lcForms)<< "DialogSimilarityPearson: gathering Data!...";
    QString matrix = (ui.matrixSelect)->currentText();
    QString varLocation = (ui.variablesLocationSelect)->currentText();
    bool diagonal = (ui.diagonalCheckBox)->isChecked();
    qCDebug(lcForms)<< "DialogSimilarityPearson: user selected: "
            << matrix
            << varLocation;
    emit userChoices( matrix, varLocation,diagonal );
}


void DialogSimilarityPearson::on_buttonBox_accepted()
{
    this->getUserChoices();
    this->accept();
}

void DialogSimilarityPearson::on_buttonBox_rejected()
{
    this->reject();
}

DialogSimilarityPearson::~DialogSimilarityPearson(){
     matrixList.clear();
     variablesLocationList.clear();
}
